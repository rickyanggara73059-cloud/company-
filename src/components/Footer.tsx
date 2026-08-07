import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <h3>PT Nama Perusahaan</h3>

      <p>
        Solusi transportasi dan logistik terpercaya
        untuk kebutuhan bisnis Anda.
      </p>

      <p>
        © {new Date().getFullYear()} PT Nama Perusahaan.
        Semua hak dilindungi.
      </p>
    </footer>
  );
};