import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { filter } from 'rxjs/operators';

import { PedidoService } from '../../core/services/pedido.service';
import { PedidoRead } from '../../models/api.models';
import { shortId } from '../../shared/ids';
import { PedidoDialogComponent, PedidoDialogData } from './pedido-dialog';

@Component({
  selector: 'app-pedido-list',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
  ],
  templateUrl: './pedido-list.html',
  styleUrl: './pedido-list.scss',
})
export class PedidoListComponent implements AfterViewInit {
  private readonly svc = inject(PedidoService);
  private readonly dialog = inject(MatDialog);
  private readonly snack = inject(MatSnackBar);

  // CORRECCIÓN: Columnas reales de Pedido
  readonly displayedColumns = ['id_pedido', 'id_usuario', 'total_pagado', 'fecha_creacion', 'acciones'];
  readonly dataSource = new MatTableDataSource<PedidoRead>([]);
  loading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {
    this.reload();
  }

  shortId = shortId;

  reload(): void {
    this.loading = true;
    this.svc.list().subscribe({
      next: (rows) => {
        this.dataSource.data = rows;
        this.loading = false;
      },
      error: (err: HttpErrorResponse) => {
        this.loading = false;
        this.snack.open(this.msg(err), 'Cerrar', { duration: 6000 });
      },
    });
  }

  nuevo(): void {
    this.open({ mode: 'create' });
  }

  editar(row: PedidoRead): void {
    this.open({ mode: 'edit', row });
  }

  private open(data: PedidoDialogData): void {
    this.dialog
      .open(PedidoDialogComponent, { width: '400px', data })
      .afterClosed()
      .pipe(filter(Boolean))
      .subscribe(() => this.reload());
  }

  eliminar(row: PedidoRead): void {
    // CORRECCIÓN: Ya no hay 'nombre', usamos el ID para mostrar qué borramos
    if (!confirm(`¿Eliminar pedido ${this.shortId(row.id_pedido)}?`)) return;
    this.svc.delete(row.id_pedido).subscribe({
      next: () => {
        this.snack.open('Pedido eliminado', 'OK', { duration: 3000 });
        this.reload();
      },
      error: (err: HttpErrorResponse) => this.snack.open(this.msg(err), 'Cerrar', { duration: 6000 }),
    });
  }

  private msg(err: HttpErrorResponse): string {
    const d = err.error?.detail;
    if (typeof d === 'string') return d;
    if (Array.isArray(d)) return d.map((x) => x.msg ?? JSON.stringify(x)).join('; ');
    return err.message;
  }
}