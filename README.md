.buscador {
  margin-bottom: 18px;
}

.lista {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contacto {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 14px 4px;
  border-bottom: 1px solid #eceeeb;
}

.contacto-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.contacto-nombre {
  font-weight: 700;
  font-size: 17px;
  word-break: break-word;
}

.contacto-telefono {
  font-size: 15px;
  color: #666;
}

.btn-eliminar {
  padding: 8px 14px;
  font-size: 14px;
  font-weight: 600;
  color: #a33a3a;
  background: #fff;
  border: 1px solid #e3c4c4;
  border-radius: 8px;
  transition: background 0.2s;
}

.btn-eliminar:hover {
  background: #fbeeee;
}

.vacio {
  text-align: center;
  color: #777;
  font-size: 17px;
  margin: 36px 0;
}

.vacio.oculto {
  display: none;
}

.pie {
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid #e6e8e5;
}

#contador {
  margin: 0;
  font-weight: 700;
  color: #666;
  font-size: 16px;
}

@media (max-width: 480px) {
  .tarjeta {
    padding: 28px 20px;
  }
}
