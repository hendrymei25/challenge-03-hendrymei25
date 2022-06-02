// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Garing",
    harga: 27000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Patil Lele",
    harga: 53000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "leminerale galon",
    harga: 19000,
    kuantitas: 2,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (dataBelanjaTemp) => {
  return dataBelanjaTemp.map((dataBelanja) => {
    return `- ${dataBelanja.nama} x ${dataBelanja.kuantitas}`;
  });
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (dataBelanjaTemp) => {
  let total = 0
  for (const i in dataBelanjaTemp) {
    total = total + (dataBelanjaTemp[i].harga * dataBelanjaTemp[i].kuantitas)
  }
  return total
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
