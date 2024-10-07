import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  // Memulai interval ketika komponen di-mount
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // Membersihkan interval ketika komponen di-unmount
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // Method untuk memperbarui state time setiap detik
  tick() {
    this.setState({
      time: new Date(),
    });
  }

  render() {
    const { time } = this.state;
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours() % 12; // Jam dalam format 12 jam

    // Menghitung sudut untuk setiap jarum jam
    const secondHandStyle = {
      transform: `rotate(${seconds * 6}deg)`, // 360/60
      backgroundColor: '#f00', // Warna jarum detik
      height: '18px', // Tinggi jarum detik
      width: '2px', // Lebar jarum detik
      position: 'absolute',
      bottom: '50%', // Posisi dari bawah
      left: '50%', // Posisi dari kiri
      transformOrigin: 'bottom', // Titik rotasi
    };

    const minuteHandStyle = {
      transform: `rotate(${minutes * 6 + seconds * 0.1}deg)`, // 360/60 + untuk detik
      backgroundColor: '#000', // Warna jarum menit
      height: '15px', // Tinggi jarum menit
      width: '3px', // Lebar jarum menit
      position: 'absolute',
      bottom: '50%', // Posisi dari bawah
      left: '50%', // Posisi dari kiri
      transformOrigin: 'bottom', // Titik rotasi
    };

    const hourHandStyle = {
      transform: `rotate(${hours * 30 + minutes * 0.5}deg)`, // 360/12 + untuk menit
      backgroundColor: '#000', // Warna jarum jam
      height: '10px', // Tinggi jarum jam
      width: '4px', // Lebar jarum jam
      position: 'absolute',
      bottom: '50%', // Posisi dari bawah
      left: '50%', // Posisi dari kiri
      transformOrigin: 'bottom', // Titik rotasi
    };

    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Menampilkan waktu digital di sebelah kiri */}
        <div style={{ marginRight: '10px', fontSize: '20px', fontWeight: 'bold', color: '#000' }}>
          {time.toLocaleTimeString()} {/* Menampilkan waktu dalam format digital */}
        </div>
        {/* Menampilkan jam analog di sebelah kanan */}
        <div style={{ position: 'relative', width: '45px', height: '45px', border: '2px solid #333', borderRadius: '50%', backgroundColor: '#fff' }}>
          <div style={hourHandStyle} />
          <div style={minuteHandStyle} />
          <div style={secondHandStyle} />
          <div style={{ position: 'absolute', width: '4px', height: '4px', backgroundColor: '#000', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} /> {/* Titik tengah jam */}
        </div>
      </div>
    );
  }
}

// Mengekspor komponen Clock agar bisa digunakan di file lain
export default Clock;
