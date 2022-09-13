document.getElementById("btn").onclick = () => {
    const corRGB = document.getElementById("rgb");
    const corHEX = document.getElementById("hex");
    const copiar = document.getElementById("copy");

    const coresHEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D","E", "F"];

    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);

    const RGB = `rgb(${R}, ${G}, ${B})`;

    const RGBparaHEX = [
        parseInt(R / 16), parseInt(R % 16), 
        parseInt(G / 16), parseInt(G % 16),
        parseInt(B / 16), parseInt(B % 16)
    ];

    let hex = "#";

    for (let i = 0; i < RGBparaHEX.length; i++) {
        let sorteiaCores = coresHEX[RGBparaHEX[i]];
        hex += sorteiaCores;
    }

    //Coloca o resultado no body.
    corRGB.textContent = RGB;
    corRGB.style.color = RGB;
    corHEX.textContent = hex;
    corHEX.style.color = hex;

    document.body.style.background = hex;

    //Copia texto
    corRGB.onclick = () => {
        navigator.clipboard.writeText(RGB);
        copiar.style.display = "block";

        setTimeout(() => {
            copiar.style.display = "none";
        }, 2000);
    };
        
    corHEX.onclick =  () => {
        navigator.clipboard.writeText(hex);
        copiar.style.display = "block";
                
        setTimeout(() => {
            copiar.style.display = "none";
        }, 2000);
    };
};