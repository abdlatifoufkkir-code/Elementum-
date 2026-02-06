const allProperties = {
  1: [ // Hydrogen
    { title: "Electron Config", value: "1s¹" },
    { title: "Density", value: "0.00008988 g/cm³" },
    { title: "Melting Point", value: "-259.14°C" },
    { title: "Boiling Point", value: "-252.87°C" },
    { title: "Price", value: "≈ $1.39/kg" },
    { title: "Discovered", value: "Henry Cavendish (1766)" }
  ],
  2: [ // Helium
    { title: "Electron Config", value: "1s²" },
    { title: "Density", value: "0.0001785 g/cm³" },
    { title: "Melting Point", value: "-272.2°C" },
    { title: "Boiling Point", value: "-268.93°C" },
    { title: "Price", value: "≈ $5.20/kg" },
    { title: "Discovered", value: "Pierre Janssen & Norman Lockyer (1868)" }
  ],
  3: [ // Lithium
    { title: "Electron Config", value: "[He] 2s¹" },
    { title: "Density", value: "0.534 g/cm³" },
    { title: "Melting Point", value: "180.54°C" },
    { title: "Boiling Point", value: "1342°C" },
    { title: "Price", value: "≈ $27/kg" },
    { title: "Discovered", value: "Johan August Arfwedson (1817)" }
  ],
  4: [ // Beryllium
    { title: "Electron Config", value: "[He] 2s²" },
    { title: "Density", value: "1.85 g/cm³" },
    { title: "Melting Point", value: "1287°C" },
    { title: "Boiling Point", value: "2469°C" },
    { title: "Price", value: "≈ $850/kg" },
    { title: "Discovered", value: "Louis-Nicolas Vauquelin (1798)" }
  ],
  5: [ // Boron
    { title: "Electron Config", value: "[He] 2s² 2p¹" },
    { title: "Density", value: "2.34 g/cm³" },
    { title: "Melting Point", value: "2075°C" },
    { title: "Boiling Point", value: "4000°C" },
    { title: "Price", value: "≈ $5/g" },
    { title: "Discovered", value: "Joseph Louis Gay-Lussac & Louis Jacques Thénard (1808)" }
  ],
  6: [ // Carbon
    { title: "Electron Config", value: "[He] 2s² 2p²" },
    { title: "Density", value: "2.267 g/cm³" },
    { title: "Melting Point", value: "3550°C" },
    { title: "Boiling Point", value: "4827°C" },
    { title: "Price", value: "≈ $24/kg" },
    { title: "Discovered", value: "Ancient" }
  ],
  7: [ // Nitrogen
    { title: "Electron Config", value: "[He] 2s² 2p³" },
    { title: "Density", value: "0.0012506 g/cm³" },
    { title: "Melting Point", value: "-210.0°C" },
    { title: "Boiling Point", value: "-195.79°C" },
    { title: "Price", value: "≈ $0.4/kg" },
    { title: "Discovered", value: "Daniel Rutherford (1772)" }
  ],
  8: [ // Oxygen
    { title: "Electron Config", value: "[He] 2s² 2p⁴" },
    { title: "Density", value: "0.001429 g/cm³" },
    { title: "Melting Point", value: "-218.79°C" },
    { title: "Boiling Point", value: "-182.95°C" },
    { title: "Price", value: "≈ $0.3/kg" },
    { title: "Discovered", value: "Joseph Priestley & Carl Wilhelm Scheele (1774)" }
  ],
  9: [ // Fluorine
    { title: "Electron Config", value: "[He] 2s² 2p⁵" },
    { title: "Density", value: "0.001696 g/cm³" },
    { title: "Melting Point", value: "-219.67°C" },
    { title: "Boiling Point", value: "-188.12°C" },
    { title: "Price", value: "≈ $190/kg" },
    { title: "Discovered", value: "Henri Moissan (1886)" }
  ],
  10: [ // Neon
    { title: "Electron Config", value: "[He] 2s² 2p⁶" },
    { title: "Density", value: "0.0008999 g/cm³" },
    { title: "Melting Point", value: "-248.59°C" },
    { title: "Boiling Point", value: "-246.08°C" },
    { title: "Price", value: "≈ $33/kg" },
    { title: "Discovered", value: "William Ramsay & Morris Travers (1898)" }
  ],
  11: [ // Sodium
    { title: "Electron Config", value: "[Ne] 3s¹" },
    { title: "Density", value: "0.971 g/cm³" },
    { title: "Melting Point", value: "97.72°C" },
    { title: "Boiling Point", value: "883°C" },
    { title: "Price", value: "≈ $25/kg" },
    { title: "Discovered", value: "Humphry Davy (1807)" }
  ],
  12: [ // Magnesium
    { title: "Electron Config", value: "[Ne] 3s²" },
    { title: "Density", value: "1.738 g/cm³" },
    { title: "Melting Point", value: "650°C" },
    { title: "Boiling Point", value: "1090°C" },
    { title: "Price", value: "≈ $3.7/kg" },
    { title: "Discovered", value: "Joseph Black (1755)" }
  ],
  13: [ // Aluminum
    { title: "Electron Config", value: "[Ne] 3s² 3p¹" },
    { title: "Density", value: "2.698 g/cm³" },
    { title: "Melting Point", value: "660.32°C" },
    { title: "Boiling Point", value: "2519°C" },
    { title: "Price", value: "≈ $2.1/kg" },
    { title: "Discovered", value: "Hans Christian Ørsted (1825)" }
  ],
  14: [ // Silicon
    { title: "Electron Config", value: "[Ne] 3s² 3p²" },
    { title: "Density", value: "2.3296 g/cm³" },
    { title: "Melting Point", value: "1414°C" },
    { title: "Boiling Point", value: "3265°C" },
    { title: "Price", value: "≈ $0.5/kg" },
    { title: "Discovered", value: "Jöns Jakob Berzelius (1824)" }
  ],
  15: [ // Phosphorus
    { title: "Electron Config", value: "[Ne] 3s² 3p³" },
    { title: "Density", value: "1.82 g/cm³" },
    { title: "Melting Point", value: "44.15°C" },
    { title: "Boiling Point", value: "280.5°C" },
    { title: "Price", value: "≈ $30/kg" },
    { title: "Discovered", value: "Hennig Brand (1669)" }
  ],
  16: [ // Sulfur
    { title: "Electron Config", value: "[Ne] 3s² 3p⁴" },
    { title: "Density", value: "2.067 g/cm³" },
    { title: "Melting Point", value: "115.21°C" },
    { title: "Boiling Point", value: "444.6°C" },
    { title: "Price", value: "≈ $0.1/kg" },
    { title: "Discovered", value: "Ancient" }
  ],
  17: [ // Chlorine
    { title: "Electron Config", value: "[Ne] 3s² 3p⁵" },
    { title: "Density", value: "0.003214 g/cm³" },
    { title: "Melting Point", value: "-101.5°C" },
    { title: "Boiling Point", value: "-34.04°C" },
    { title: "Price", value: "≈ $0.15/kg" },
    { title: "Discovered", value: "Carl Wilhelm Scheele (1774)" }
  ],
  18: [ // Argon
    { title: "Electron Config", value: "[Ne] 3s² 3p⁶" },
    { title: "Density", value: "0.0017837 g/cm³" },
    { title: "Melting Point", value: "-189.35°C" },
    { title: "Boiling Point", value: "-185.85°C" },
    { title: "Price", value: "≈ $0.5/kg" },
    { title: "Discovered", value: "Lord Rayleigh & William Ramsay (1894)" }
  ],
  19: [ // Potassium
    { title: "Electron Config", value: "[Ar] 4s¹" },
    { title: "Density", value: "0.862 g/cm³" },
    { title: "Melting Point", value: "63.38°C" },
    { title: "Boiling Point", value: "759°C" },
    { title: "Price", value: "≈ $100/kg" },
    { title: "Discovered", value: "Humphry Davy (1807)" }
  ],
  20: [ // Calcium
    { title: "Electron Config", value: "[Ar] 4s²" },
    { title: "Density", value: "1.54 g/cm³" },
    { title: "Melting Point", value: "842°C" },
    { title: "Boiling Point", value: "1484°C" },
    { title: "Price", value: "≈ $20/kg" },
    { title: "Discovered", value: "Humphry Davy (1808)" }
  ],
  21: [ // Scandium
    { title: "Electron Config", value: "[Ar] 3d¹ 4s²" },
    { title: "Density", value: "2.989 g/cm³" },
    { title: "Melting Point", value: "1541°C" },
    { title: "Boiling Point", value: "2830°C" },
    { title: "Price", value: "≈ $270/g" },
    { title: "Discovered", value: "Lars Fredrik Nilson (1879)" }
  ],
  22: [ // Titanium
    { title: "Electron Config", value: "[Ar] 3d² 4s²" },
    { title: "Density", value: "4.54 g/cm³" },
    { title: "Melting Point", value: "1668°C" },
    { title: "Boiling Point", value: "3287°C" },
    { title: "Price", value: "≈ $6.6/kg" },
    { title: "Discovered", value: "William Gregor (1791)" }
  ],
  23: [ // Vanadium
    { title: "Electron Config", value: "[Ar] 3d³ 4s²" },
    { title: "Density", value: "6.11 g/cm³" },
    { title: "Melting Point", value: "1910°C" },
    { title: "Boiling Point", value: "3407°C" },
    { title: "Price", value: "≈ $25/kg" },
    { title: "Discovered", value: "Andrés Manuel del Río (1801)" }
  ],
  24: [ // Chromium
    { title: "Electron Config", value: "[Ar] 3d⁵ 4s¹" },
    { title: "Density", value: "7.15 g/cm³" },
    { title: "Melting Point", value: "1907°C" },
    { title: "Boiling Point", value: "2671°C" },
    { title: "Price", value: "≈ $10/kg" },
    { title: "Discovered", value: "Louis-Nicolas Vauquelin (1797)" }
  ],
  25: [ // Manganese
    { title: "Electron Config", value: "[Ar] 3d⁵ 4s²" },
    { title: "Density", value: "7.44 g/cm³" },
    { title: "Melting Point", value: "1246°C" },
    { title: "Boiling Point", value: "2061°C" },
    { title: "Price", value: "≈ $2.8/kg" },
    { title: "Discovered", value: "Johan Gottlieb Gahn (1774)" }
  ],
  26: [ // Iron
    { title: "Electron Config", value: "[Ar] 3d⁶ 4s²" },
    { title: "Density", value: "7.874 g/cm³" },
    { title: "Melting Point", value: "1538°C" },
    { title: "Boiling Point", value: "2862°C" },
    { title: "Price", value: "≈ $0.1/kg" },
    { title: "Discovered", value: "Ancient" }
  ],
  27: [ // Cobalt
    { title: "Electron Config", value: "[Ar] 3d⁷ 4s²" },
    { title: "Density", value: "8.86 g/cm³" },
    { title: "Melting Point", value: "1495°C" },
    { title: "Boiling Point", value: "2927°C" },
    { title: "Price", value: "≈ $45/kg" },
    { title: "Discovered", value: "Georg Brandt (1735)" }
  ],
  28: [ // Nickel
    { title: "Electron Config", value: "[Ar] 3d⁸ 4s²" },
    { title: "Density", value: "8.912 g/cm³" },
    { title: "Melting Point", value: "1455°C" },
    { title: "Boiling Point", value: "2730°C" },
    { title: "Price", value: "≈ $16/kg" },
    { title: "Discovered", value: "Axel Fredrik Cronstedt (1751)" }
  ],
  29: [ // Copper
    { title: "Electron Config", value: "[Ar] 3d¹⁰ 4s¹" },
    { title: "Density", value: "8.96 g/cm³" },
    { title: "Melting Point", value: "1084.62°C" },
    { title: "Boiling Point", value: "2562°C" },
    { title: "Price", value: "≈ $9/kg" },
    { title: "Discovered", value: "Ancient" }
  ],
  30: [ // Zinc
    { title: "Electron Config", value: "[Ar] 3d¹⁰ 4s²" },
    { title: "Density", value: "7.134 g/cm³" },
    { title: "Melting Point", value: "419.53°C" },
    { title: "Boiling Point", value: "907°C" },
    { title: "Price", value: "≈ $3.5/kg" },
    { title: "Discovered", value: "Ancient" }
  ],
  31: [ // Gallium
    { title: "Electron Config", value: "[Ar] 3d¹⁰ 4s² 4p¹" },
    { title: "Density", value: "5.91 g/cm³" },
    { title: "Melting Point", value: "29.76°C" },
    { title: "Boiling Point", value: "2204°C" },
    { title: "Price", value: "≈ $0.5/g" },
    { title: "Discovered", value: "Lecoq de Boisbaudran (1875)" }
  ],
  32: [ // Germanium
    { title: "Electron Config", value: "[Ar] 3d¹⁰ 4s² 4p²" },
    { title: "Density", value: "5.323 g/cm³" },
    { title: "Melting Point", value: "938.25°C" },
    { title: "Boiling Point", value: "2833°C" },
    { title: "Price", value: "≈ $1.2/g" },
    { title: "Discovered", value: "Clemens Winkler (1886)" }
  ],
  33: [ // Arsenic
    { title: "Electron Config", value: "[Ar] 3d¹⁰ 4s² 4p³" },
    { title: "Density", value: "5.727 g/cm³" },
    { title: "Melting Point", value: "817°C" },
    { title: "Boiling Point", value: "614°C" },
    { title: "Price", value: "≈ $0.2/g" },
    { title: "Discovered", value: "Albertus Magnus (1250)" },
    { title: "abundanceData", value: [200, 400, 300, 600, 500, 800] }, // أرقام المخطط هنا
  ],
  34: [ // Selenium
    { title: "Electron Config", value: "[Ar] 3d¹⁰ 4s² 4p⁴" },
    { title: "Density", value: "4.81 g/cm³" },
    { title: "Melting Point", value: "221°C" },
    { title: "Boiling Point", value: "685°C" },
    { title: "Price", value: "≈ $0.05/g" },
    { title: "Discovered", value: "Jöns Jakob Berzelius (1817)" }
  ],
  35: [ // Bromine
    { title: "Electron Config", value: "[Ar] 3d¹⁰ 4s² 4p⁵" },
    { title: "Density", value: "3.1028 g/cm³" },
    { title: "Melting Point", value: "-7.2°C" },
    { title: "Boiling Point", value: "58.8°C" },
    { title: "Price", value: "≈ $0.04/g" },
    { title: "Discovered", value: "A.J. Balard & L. Gmelin (1826)" }
  ],
  36: [ // Krypton
    { title: "Electron Config", value: "[Ar] 3d¹⁰ 4s² 4p⁶" },
    { title: "Density", value: "0.003733 g/cm³" },
    { title: "Melting Point", value: "-157.36°C" },
    { title: "Boiling Point", value: "-153.22°C" },
    { title: "Price", value: "≈ $0.3/L" },
    { title: "Discovered", value: "W. Ramsay & M. Travers (1898)" }
  ],
  37: [ // Rubidium
    { title: "Electron Config", value: "[Kr] 5s¹" },
    { title: "Density", value: "1.532 g/cm³" },
    { title: "Melting Point", value: "39.31°C" },
    { title: "Boiling Point", value: "688°C" },
    { title: "Price", value: "≈ $12/g" },
    { title: "Discovered", value: "R. Bunsen & G. Kirchhoff (1861)" }
  ],
  38: [ // Strontium
    { title: "Electron Config", value: "[Kr] 5s²" },
    { title: "Density", value: "2.64 g/cm³" },
    { title: "Melting Point", value: "777°C" },
    { title: "Boiling Point", value: "1382°C" },
    { title: "Price", value: "≈ $1/g" },
    { title: "Discovered", value: "Adair Crawford (1790)" }
  ],
  39: [ // Yttrium
    { title: "Electron Config", value: "[Kr] 4d¹ 5s²" },
    { title: "Density", value: "4.472 g/cm³" },
    { title: "Melting Point", value: "1522°C" },
    { title: "Boiling Point", value: "3338°C" },
    { title: "Price", value: "≈ $0.1/g" },
    { title: "Discovered", value: "Johan Gadolin (1794)" }
  ],
  40: [ // Zirconium
    { title: "Electron Config", value: "[Kr] 4d² 5s²" },
    { title: "Density", value: "6.52 g/cm³" },
    { title: "Melting Point", value: "1855°C" },
    { title: "Boiling Point", value: "4409°C" },
    { title: "Price", value: "≈ $0.03/g" },
    { title: "Discovered", value: "M.H. Klaproth (1789)" }
  ],
  41: [ // Niobium
    { title: "Electron Config", value: "[Kr] 4d⁴ 5s¹" },
    { title: "Density", value: "8.57 g/cm³" },
    { title: "Melting Point", value: "2477°C" },
    { title: "Boiling Point", value: "4744°C" },
    { title: "Price", value: "≈ $0.2/g" },
    { title: "Discovered", value: "Charles Hatchett (1801)" }
  ],
  42: [ // Molybdenum
    { title: "Electron Config", value: "[Kr] 4d⁵ 5s¹" },
    { title: "Density", value: "10.28 g/cm³" },
    { title: "Melting Point", value: "2623°C" },
    { title: "Boiling Point", value: "4639°C" },
    { title: "Price", value: "≈ $0.04/g" },
    { title: "Discovered", value: "Carl Wilhelm Scheele (1778)" }
  ],
  43: [ // Technetium
    { title: "Electron Config", value: "[Kr] 4d⁵ 5s²" },
    { title: "Density", value: "11 g/cm³" },
    { title: "Melting Point", value: "2157°C" },
    { title: "Boiling Point", value: "4265°C" },
    { title: "Price", value: "Synthetic" },
    { title: "Discovered", value: "C. Perrier & E. Segrè (1937)" }
  ],
  44: [ // Ruthenium
    { title: "Electron Config", value: "[Kr] 4d⁷ 5s¹" },
    { title: "Density", value: "12.45 g/cm³" },
    { title: "Melting Point", value: "2334°C" },
    { title: "Boiling Point", value: "4150°C" },
    { title: "Price", value: "≈ $8/g" },
    { title: "Discovered", value: "Karl Ernst Claus (1844)" }
  ],
  45: [ // Rhodium
    { title: "Electron Config", value: "[Kr] 4d⁸ 5s¹" },
    { title: "Density", value: "12.41 g/cm³" },
    { title: "Melting Point", value: "1964°C" },
    { title: "Boiling Point", value: "3695°C" },
    { title: "Price", value: "≈ $150/g" },
    { title: "Discovered", value: "William Hyde Wollaston (1803)" }
  ],
  46: [ // Palladium
    { title: "Electron Config", value: "[Kr] 4d¹⁰" },
    { title: "Density", value: "12.023 g/cm³" },
    { title: "Melting Point", value: "1554.9°C" },
    { title: "Boiling Point", value: "2963°C" },
    { title: "Price", value: "≈ $60/g" },
    { title: "Discovered", value: "William Hyde Wollaston (1803)" }
  ],
  47: [ // Silver
    { title: "Electron Config", value: "[Kr] 4d¹⁰ 5s¹" },
    { title: "Density", value: "10.49 g/cm³" },
    { title: "Melting Point", value: "961.78°C" },
    { title: "Boiling Point", value: "2162°C" },
    { title: "Price", value: "≈ $0.8/g" },
    { title: "Discovered", value: "Ancient" }
  ],
  48: [ // Cadmium
    { title: "Electron Config", value: "[Kr] 4d¹⁰ 5s²" },
    { title: "Density", value: "8.65 g/cm³" },
    { title: "Melting Point", value: "321.07°C" },
    { title: "Boiling Point", value: "767°C" },
    { title: "Price", value: "≈ $0.01/g" },
    { title: "Discovered", value: "F. Stromeyer & K.S.L. Hermann (1817)" }
  ],
  49: [ // Indium
    { title: "Electron Config", value: "[Kr] 4d¹⁰ 5s² 5p¹" },
    { title: "Density", value: "7.31 g/cm³" },
    { title: "Melting Point", value: "156.6°C" },
    { title: "Boiling Point", value: "2072°C" },
    { title: "Price", value: "≈ $0.3/g" },
    { title: "Discovered", value: "F. Reich & H.T. Richter (1863)" }
  ],
  50: [ // Tin
    { title: "Electron Config", value: "[Kr] 4d¹⁰ 5s² 5p²" },
    { title: "Density", value: "7.265 g/cm³" },
    { title: "Melting Point", value: "231.93°C" },
    { title: "Boiling Point", value: "2602°C" },
    { title: "Price", value: "≈ $0.02/g" },
    { title: "Discovered", value: "Ancient" }
  ],
  51: [ // Antimony
    { title: "Electron Config", value: "[Kr] 4d¹⁰ 5s² 5p³" },
    { title: "Density", value: "6.697 g/cm³" },
    { title: "Melting Point", value: "630.63°C" },
    { title: "Boiling Point", value: "1587°C" },
    { title: "Price", value: "≈ $0.01/g" },
    { title: "Discovered", value: "Ancient" }
  ],
  52: [ // Tellurium
    { title: "Electron Config", value: "[Kr] 4d¹⁰ 5s² 5p⁴" },
    { title: "Density", value: "6.24 g/cm³" },
    { title: "Melting Point", value: "449.51°C" },
    { title: "Boiling Point", value: "988°C" },
    { title: "Price", value: "≈ $0.1/g" },
    { title: "Discovered", value: "Franz-Joseph Müller von Reichenstein (1782)" }
  ],
  53: [ // Iodine
    { title: "Electron Config", value: "[Kr] 4d¹⁰ 5s² 5p⁵" },
    { title: "Density", value: "4.933 g/cm³" },
    { title: "Melting Point", value: "113.7°C" },
    { title: "Boiling Point", value: "184.3°C" },
    { title: "Price", value: "≈ $0.05/g" },
    { title: "Discovered", value: "Bernard Courtois (1811)" }
  ],
  54: [ // Xenon
    { title: "Electron Config", value: "[Kr] 4d¹⁰ 5s² 5p⁶" },
    { title: "Density", value: "0.005887 g/cm³" },
    { title: "Melting Point", value: "-111.75°C" },
    { title: "Boiling Point", value: "-108.1°C" },
    { title: "Price", value: "≈ $1.2/L" },
    { title: "Discovered", value: "W. Ramsay & M. Travers (1898)" }
  ],
  55: [ // Cesium
    { title: "Electron Config", value: "[Xe] 6s¹" },
    { title: "Density", value: "1.93 g/cm³" },
    { title: "Melting Point", value: "28.44°C" },
    { title: "Boiling Point", value: "671°C" },
    { title: "Price", value: "≈ $11/g" },
    { title: "Discovered", value: "R. Bunsen & G. Kirchhoff (1860)" }
  ],
  56: [ // Barium
    { title: "Electron Config", value: "[Xe] 6s²" },
    { title: "Density", value: "3.51 g/cm³" },
    { title: "Melting Point", value: "727°C" },
    { title: "Boiling Point", value: "1897°C" },
    { title: "Price", value: "≈ $1/g" },
    { title: "Discovered", value: "Humphry Davy (1808)" }
  ],
  57: [ // Lanthanum
    { title: "Electron Config", value: "[Xe] 5d¹ 6s²" },
    { title: "Density", value: "6.162 g/cm³" },
    { title: "Melting Point", value: "920°C" },
    { title: "Boiling Point", value: "3464°C" },
    { title: "Price", value: "≈ $0.1/g" },
    { title: "Discovered", value: "Carl Gustaf Mosander (1839)" }
  ],
  58: [ // Cerium
    { title: "Electron Config", value: "[Xe] 4f¹ 5d¹ 6s²" },
    { title: "Density", value: "6.77 g/cm³" },
    { title: "Melting Point", value: "795°C" },
    { title: "Boiling Point", value: "3443°C" },
    { title: "Price", value: "≈ $0.05/g" },
    { title: "Discovered", value: "M.H. Klaproth & J.J. Berzelius (1803)" }
  ],
  59: [ // Praseodymium
    { title: "Electron Config", value: "[Xe] 4f³ 6s²" },
    { title: "Density", value: "6.77 g/cm³" },
    { title: "Melting Point", value: "935°C" },
    { title: "Boiling Point", value: "3520°C" },
    { title: "Price", value: "≈ $0.1/g" },
    { title: "Discovered", value: "Carl Auer von Welsbach (1885)" }
  ],
  60: [ // Neodymium
    { title: "Electron Config", value: "[Xe] 4f ⁴ 6s²" },
    { title: "Density", value: "7.01 g/cm³" },
    { title: "Melting Point", value: "1024°C" },
    { title: "Boiling Point", value: "3074°C" },
    { title: "Price", value: "≈ $0.2/g" },
    { title: "Discovered", value: "Carl Auer von Welsbach (1885)" }
  ]
};
const allAbundance = {
  1: [1400, 1420, 1450, 1480, 1500, 1520], // Hydrogen (H)
  2: [0.008, 0.0082, 0.0085, 0.0088, 0.009, 0.01], // Helium (He) - نادر جداً
  3: [20, 21, 23, 25, 28, 30], // Lithium (Li)
  4: [2.8, 2.8, 2.9, 3.0, 3.1, 3.2], // Beryllium (Be)
  5: [10, 10, 11, 11, 12, 13], // Boron (B)
  6: [200, 210, 225, 240, 260, 280], // Carbon (C)
  7: [19, 19, 20, 20, 21, 22], // Nitrogen (N)
  8: [461000, 461200, 461500, 461800, 462000, 462500], // Oxygen (O) - الأكثر وفرة
  9: [585, 590, 600, 610, 625, 640], // Fluorine (F)
  10: [0.005, 0.0052, 0.0055, 0.0058, 0.006, 0.007], // Neon (Ne) - نادر جداً
  11: [23600, 23800, 24000, 24200, 24500, 25000], // Sodium (Na)
  12: [23300, 23500, 23700, 24000, 24300, 24800], // Magnesium (Mg)
  13: [82300, 82500, 82700, 83000, 83500, 84000], // Aluminum (Al)
  14: [282000, 282500, 283000, 283500, 284000, 285000], // Silicon (Si)
  15: [1050, 1060, 1080, 1100, 1120, 1150], // Phosphorus (P)
  16: [350, 360, 380, 400, 420, 450], // Sulfur (S)
  17: [145, 148, 150, 155, 160, 170], // Chlorine (Cl)
  18: [3.5, 3.6, 3.7, 3.8, 3.9, 4.0], // Argon (Ar)
  19: [20900, 21100, 21300, 21500, 21800, 22000], // Potassium (K)
  20: [41500, 41800, 42200, 42600, 43000, 43500], // Calcium (Ca)
  21: [22, 23, 24, 25, 26, 27], // Scandium (Sc)
  22: [5650, 5680, 5710, 5740, 5780, 5820], // Titanium (Ti)
  23: [120, 125, 132, 140, 150, 160], // Vanadium (V)
  24: [102, 105, 108, 112, 118, 125], // Chromium (Cr)
  25: [950, 965, 980, 1000, 1020, 1050], // Manganese (Mn)
  26: [56300, 56500, 56800, 57100, 57500, 58000], // Iron (Fe)
  27: [25, 26, 27, 28, 29, 31], // Cobalt (Co)
  28: [84, 87, 90, 95, 99, 105], // Nickel (Ni)
  29: [60, 63, 67, 72, 78, 85], // Copper (Cu)
  30: [70, 75, 79, 84, 90, 98],  // Zinc (Zn)
  31: [18, 18, 19, 19, 20, 21], // Gallium (Ga)
  32: [1.5, 1.5, 1.6, 1.7, 1.8, 2.0], // Germanium (Ge)
  33: [1.8, 1.8, 1.9, 2.0, 2.1, 2.3], // Arsenic (As)
  34: [0.05, 0.05, 0.06, 0.07, 0.08, 0.1], // Selenium (Se)
  35: [2.4, 2.5, 2.6, 2.8, 3.0, 3.2], // Bromine (Br)
  36: [0.0001, 0.0001, 0.0001, 0.0001, 0.0001, 0.0001], // Krypton (Kr)
  37: [90, 92, 95, 98, 102, 105], // Rubidium (Rb)
  38: [370, 375, 380, 390, 400, 415], // Strontium (Sr)
  39: [33, 33, 34, 35, 36, 38], // Yttrium (Y)
  40: [160, 162, 165, 170, 175, 180], // Zirconium (Zr)
  41: [20, 20, 21, 21, 22, 23], // Niobium (Nb)
  42: [1.2, 1.2, 1.3, 1.4, 1.5, 1.6], // Molybdenum (Mo)
  43: [0.0000001, 0.0000001, 0.0000001, 0.0000001, 0.0000001, 0.0000001], // Technetium (Tc) - مشع
  44: [0.001, 0.001, 0.001, 0.001, 0.002, 0.002], // Ruthenium (Ru)
  45: [0.001, 0.001, 0.001, 0.001, 0.001, 0.001], // Rhodium (Rh)
  46: [0.015, 0.015, 0.016, 0.017, 0.018, 0.02], // Palladium (Pd)
  47: [0.075, 0.075, 0.078, 0.08, 0.085, 0.09], // Silver (Ag) - الفضة
  48: [0.15, 0.15, 0.16, 0.17, 0.18, 0.2], // Cadmium (Cd)
  49: [0.25, 0.25, 0.26, 0.27, 0.28, 0.3], // Indium (In)
  50: [2.3, 2.3, 2.4, 2.5, 2.6, 2.8], // Tin (Sn) - القصدير
  51: [0.2, 0.2, 0.2, 0.3, 0.4, 0.5], // Antimony (Sb)
  52: [0.001, 0.001, 0.001, 0.001, 0.001, 0.001], // Tellurium (Te)
  53: [0.45, 0.46, 0.48, 0.50, 0.52, 0.55], // Iodine (I) - اليود
  54: [0.00003, 0.00003, 0.00003, 0.00003, 0.00003, 0.00004], // Xenon (Xe)
  55: [3, 3, 3.2, 3.5, 3.8, 4], // Cesium (Cs)
  56: [425, 430, 440, 450, 465, 480], // Barium (Ba)
  57: [39, 40, 42, 44, 46, 50], // Lanthanum (La)
  58: [66, 68, 70, 72, 75, 80], // Cerium (Ce)
  59: [9.2, 9.3, 9.5, 9.7, 10, 11], // Praseodymium (Pr)
  60: [41, 42, 43, 45, 47, 50],  // Neodymium (Nd)


};

const elementData = {
  // 1: Hydrogen (H)
  1: [
    { name: "China", value: 50 },
    { name: "USA", value: 30 },
    { name: "India", value: 20 }
  ],
  // 2: Helium (He)
 2: [
    { name: "atmosphirique", value: 1 },
    { name: "globel", value: 99 }
  ],
  // 3: Lithium (Li)
  3: [
    { name: "Australia", value: 55 },
    { name: "Chile", value: 30 },
    { name: "China", value: 15 }
  ],
  // 4: Beryllium (Be)
  4: [
    { name: "USA", value: 70 },
    { name: "China", value: 25 },
    { name: "Brazil", value: 5 }
  ],
  // 5: Boron (B)
  5: [
    { name: "Turkey", value: 65 },
    { name: "USA", value: 20 },
    { name: "Chile", value: 15 }
  ],
  // 6: Carbon (Graphite)
  6: [
    { name: "China", value: 75 },
    { name: "Mozambique", value: 15 },
    { name: "Brazil", value: 10 }
  ],
  // 7: Nitrogen (N)
 7: [
    { name: "atmosphirique", value: 78 },
    { name: "globel", value: 22 }
  ],
  // 8: Oxygen (O)
8: [
    { name: "atmosphirique", value: 21 },
    { name: "globel", value: 79 }
  ],
  // 9: Fluorine (F)
  9: [
    { name: "China", value: 70 },
    { name: "Mexico", value: 20 },
    { name: "Mongolia", value: 10 }
  ],
  // 10: Neon (Ne)
10: [
    { name: "atmosphirique", value: 1 },
    { name: "globel", value: 99 }
  ],
  // 11: Sodium (Na)
  11: [
    { name: "China", value: 55 },
    { name: "USA", value: 25 },
    { name: "India", value: 20 }
  ],
  // 12: Magnesium (Mg)
  12: [
    { name: "China", value: 92 },
    { name: "Russia", value: 5 },
    { name: "Turkey", value: 3 }
  ],
  // 13: Aluminum (Al)
  13: [
    { name: "China", value: 70 },
    { name: "India", value: 15 },
    { name: "Russia", value: 15 }
  ],
  // 14: Silicon (Si)
  14: [
    { name: "China", value: 80 },
    { name: "Russia", value: 12 },
    { name: "Brazil", value: 8 }
  ],
  // 15: Phosphorus (P)
  15: [
    { name: "China", value: 55 },
    { name: "Morocco", value: 30 },
    { name: "USA", value: 15 }
  ],
  // 16: Sulfur (S)
  16: [
    { name: "China", value: 40 },
    { name: "USA", value: 35 },
    { name: "Russia", value: 25 }
  ],
  // 17: Chlorine (Cl)
  17: [
    { name: "China", value: 55 },
    { name: "USA", value: 30 },
    { name: "Germany", value: 15 }
  ],
  // 18: Argon (Ar)
 18: [
    { name: "atmosphirique", value: 0.93 },
    { name: "globel", value: 99.07 }
  ],
  // 19: Potassium (K)
  19: [
    { name: "Canada", value: 45 },
    { name: "Russia", value: 30 },
    { name: "Belarus", value: 25 }
  ],
  // 20: Calcium (Ca)
  20: [
    { name: "China", value: 65 },
    { name: "USA", value: 20 },
    { name: "India", value: 15 }
  ],
  // 21: Scandium (Sc)
  21: [
    { name: "China", value: 85 },
    { name: "Russia", value: 10 },
    { name: "Madagascar", value: 5 }
  ],
  // 22: Titanium (Ti)
  22: [
    { name: "China", value: 65 },
    { name: "Japan", value: 20 },
    { name: "Russia", value: 15 }
  ],
  // 23: Vanadium (V)
  23: [
    { name: "China", value: 70 },
    { name: "Russia", value: 20 },
    { name: "South Africa", value: 10 }
  ],
  // 24: Chromium (Cr)
  24: [
    { name: "South Africa", value: 60 },
    { name: "Kazakhstan", value: 25 },
    { name: "Turkey", value: 15 }
  ],
  // 25: Manganese (Mn)
  25: [
    { name: "South Africa", value: 50 },
    { name: "Gabon", value: 30 },
    { name: "Australia", value: 20 }
  ],
  // 26: Iron (Fe)
  26: [
    { name: "Australia", value: 55 },
    { name: "Brazil", value: 30 },
    { name: "China", value: 15 }
  ],
  // 27: Cobalt (Co)
  27: [
    { name: "DR Congo", value: 80 },
    { name: "Russia", value: 12 },
    { name: "Australia", value: 8 }
  ],
  // 28: Nickel (Ni)
  28: [
    { name: "Indonesia", value: 70 },
    { name: "Philippines", value: 18 },
    { name: "Russia", value: 12 }
  ],
  // 29: Copper (Cu)
  29: [
    { name: "Chile", value: 50 },
    { name: "Peru", value: 25 },
    { name: "DR Congo", value: 25 }
  ],
  // 30: Zinc (Zn)
  30: [
    { name: "China", value: 60 },
    { name: "Peru", value: 25 },
    { name: "Australia", value: 15 }
  ],
  31: [
    { name: "China", value: 86 },
    { name: "Russia", value: 9 },
    { name: "Japan", value: 5 }
  ],
  // 32: Germanium (Ge)
  32: [
    { name: "China", value: 68 },
    { name: "Russia", value: 17 },
    { name: "USA", value: 15 }
  ],
  // 33: Arsenic (As)
  33: [
    { name: "China", value: 75 },
    { name: "Morocco", value: 15 },
    { name: "Russia", value: 10 }
  ],
  // 34: Selenium (Se)
  34: [
    { name: "China", value: 50 },
    { name: "Japan", value: 25 },
    { name: "Germany", value: 25 }
  ],
  // 35: Bromine (Br)
  35: [
    { name: "Israel", value: 45 },
    { name: "Jordan", value: 30 },
    { name: "USA", value: 25 }
  ],
  // 36: Krypton (Kr)
36: [
    { name: "atmosphirique", value: 0.0001 },
    { name: "globel", value: 99.9999 }
  ],
  // 37: Rubidium (Rb)
  37: [
    { name: "China", value: 60 },
    { name: "Canada", value: 30 },
    { name: "Namibia", value: 10 }
  ],
  // 38: Strontium (Sr)
  38: [
    { name: "Spain", value: 50 },
    { name: "China", value: 35 },
    { name: "Mexico", value: 15 }
  ],
  // 39: Yttrium (Y)
  39: [
    { name: "China", value: 94 },
    { name: "Myanmar", value: 4 },
    { name: "Australia", value: 2 }
  ],
  // 40: Zirconium (Zr)
  40: [
    { name: "Australia", value: 55 },
    { name: "South Africa", value: 30 },
    { name: "China", value: 15 }
  ],
  // 41: Niobium (Nb)
  41: [
    { name: "Brazil", value: 90 },
    { name: "Canada", value: 7 },
    { name: "Russia", value: 3 }
  ],
  // 42: Molybdenum (Mo)
  42: [
    { name: "China", value: 45 },
    { name: "Chile", value: 30 },
    { name: "USA", value: 25 }
  ],
  // 43: Technetium (Tc) - عنصر مشع ينتج في المفاعلات
  43: [
    { name: "USA", value: 40 },
    { name: "Russia", value: 35 },
    { name: "Netherlands", value: 25 }
  ],
  // 44: Ruthenium (Ru)
  44: [
    { name: "South Africa", value: 85 },
    { name: "Russia", value: 10 },
    { name: "Zimbabwe", value: 5 }
  ],
  // 45: Rhodium (Rh)
  45: [
    { name: "South Africa", value: 80 },
    { name: "Russia", value: 12 },
    { name: "Zimbabwe", value: 8 }
  ],
  // 46: Palladium (Pd)
  46: [
    { name: "Russia", value: 43 },
    { name: "South Africa", value: 37 },
    { name: "Canada", value: 20 }
  ],
  // 47: Silver (Ag)
  47: [
    { name: "Mexico", value: 45 },
    { name: "China", value: 30 },
    { name: "Peru", value: 25 }
  ],
  // 48: Cadmium (Cd)
  48: [
    { name: "China", value: 60 },
    { name: "South Korea", value: 25 },
    { name: "Japan", value: 15 }
  ],
  // 49: Indium (In)
  49: [
    { name: "China", value: 65 },
    { name: "South Korea", value: 20 },
    { name: "Canada", value: 15 }
  ],
  // 50: Tin (Sn)
  50: [
    { name: "China", value: 45 },
    { name: "Indonesia", value: 35 },
    { name: "Peru", value: 20 }
  ],
  // 51: Antimony (Sb)
  51: [
    { name: "China", value: 55 },
    { name: "Russia", value: 25 },
    { name: "Tajikistan", value: 20 }
  ],
  // 52: Tellurium (Te)
  52: [
    { name: "China", value: 65 },
    { name: "Russia", value: 20 },
    { name: "Japan", value: 15 }
  ],
  // 53: Iodine (I)
  53: [
    { name: "Chile", value: 65 },
    { name: "Japan", value: 25 },
    { name: "USA", value: 10 }
  ],
  // 54: Xenon (Xe)
 54: [
    { name: "atmosphirique", value: 0.000008 },
    { name: "globel", value: 99.999992 }
  ],
  // 55: Cesium (Cs)
  55: [
    { name: "Canada", value: 55 },
    { name: "China", value: 30 },
    { name: "Zimbabwe", value: 15 }
  ],
  // 56: Barium (Ba)
  56: [
    { name: "China", value: 55 },
    { name: "India", value: 30 },
    { name: "Morocco", value: 15 }
  ],
  // 57: Lanthanum (La)
  57: [
    { name: "China", value: 85 },
    { name: "USA", value: 10 },
    { name: "Myanmar", value: 5 }
  ],
  // 58: Cerium (Ce)
  58: [
    { name: "China", value: 85 },
    { name: "USA", value: 10 },
    { name: "Myanmar", value: 5 }
  ],
  // 59: Praseodymium (Pr)
  59: [
    { name: "China", value: 82 },
    { name: "USA", value: 13 },
    { name: "Australia", value: 5 }
  ],
  // 60: Neodymium (Nd)
  60: [
    { name: "China", value: 80 },
    { name: "USA", value: 15 },
    { name: "Thailand", value: 5 }
  ]
};

const elementUses = {
    1: ["Rocket Fuel", "Ammonia Production", "Hydrogenation of Fats", "Hydrocracking", "Fuel Cells"],
    2: ["Balloons & Airships", "Cryogenics", "Deep-sea Diving Mixes", "Pressurizing Rocket Fuel"],
    3: ["EV Batteries", "Mobile Phones", "Antidepressants", "Aluminium Alloys", "Lubricating Greases"],
    4: ["Aerospace Components", "X-ray Windows", "Missile Guidance", "Non-sparking Tools"],
    5: ["Borosilicate Glass", "Pyrotechnics", "Fiberglass", "Nuclear Control Rods", "Semiconductor Doping"],
    6: ["Steel Alloy", "Jewelry (Diamonds)", "Water Filtration", "Pencils (Graphite)", "Carbon Fiber"],
    7: ["Fertilizers", "Food Preservation", "Liquid Nitrogen", "Explosives", "Electronics Manufacturing"],
    8: ["Steel Manufacturing", "Medical Oxygen", "Rocket Propellant", "Water Treatment", "Oxidizer in Welding"],
    9: ["Toothpaste", "Refrigerants", "Teflon Production", "Uranium Processing", "Glass Etching"],
    10: ["Neon Signs", "High-voltage Indicators", "Gas Lasers", "Cryogenic Refrigerant"],
    11: ["Street Lights", "Heat Exchangers", "Table Salt", "Chemical Synthesis", "Nuclear Reactor Coolant"],
    12: ["Aircraft Alloys", "Flares & Fireworks", "Car Parts", "Laptops & Cameras", "Magnesium Milk"],
    13: ["Beverage Cans", "Aerospace Engineering", "Construction Materials", "Electrical Transmission", "Kitchen Foil"],
    14: ["Microchips", "Solar Cells", "Glass & Ceramics", "Concrete & Bricks", "Silicone Rubber"],
    15: ["Fertilizers", "Safety Matches", "Detergents", "Steel Production", "Pesticides"],
    16: ["Sulfuric Acid Production", "Rubber Vulcanization", "Gunpowder", "Fungicides", "Batteries"],
    17: ["Water Purification", "PVC Pipes", "Disinfectants", "Bleaching Paper", "Chlorinated Solvents"],
    18: ["Light Bulbs", "Double-glazing Insulation", "Welding Shields", "Titanium Production", "Silicon Wafer Growth"],
    19: ["Fertilizers", "Liquid Soaps", "Glassmaking", "Gunpowder", "Low-sodium Salt"],
    20: ["Cement & Mortar", "Steel Deoxidizer", "Dairy Products", "Vitamin Supplements", "Plaster of Paris"],
    21: ["Aerospace Components", "Bicycle Frames", "Mercury Vapor Lamps", "Stadium Lighting"],
    22: ["Joint Replacements", "Jet Engines", "Paint Pigments", "Sunscreen", "Desalination Plants"],
    23: ["High-speed Steel Tools", "Nuclear Power Plants", "Superconducting Magnets", "Sulfuric Acid Catalyst"],
    24: ["Stainless Steel", "Chrome Plating", "Tanning Leather", "Magnetic Tapes", "Anti-corrosion Coatings"],
    25: ["Steel Production", "Dry Cell Batteries", "Aluminum Alloys", "Glass Decolorization", "Animal Feed"],
    26: ["Building Construction", "Automotive Parts", "Bridge Cables", "Magnets", "Tools & Cutlery"],
    27: ["Permanent Magnets", "Jet Turbines", "Cancer Radiotherapy", "Blue Glass Pigments", "High-speed Tool Steel"],
    28: ["Rechargeable Batteries", "Coins", "Guitar Strings", "Kitchen Sinks", "Electroplating"],
    29: ["Electrical Wiring", "Plumbing Pipes", "Cookware", "Statues (Bronze)", "Printed Circuit Boards"],
    30: ["Galvanizing Steel", "Brass Musical Instruments", "Sunscreen (Zinc Oxide)", "Die-casting", "Die-casting", "Alkaline Batteries"],
    31: ["LEDs", "Smartphones", "Semiconductors", "High-temperature Thermometers", "Blu-ray Players"],
    32: ["Fiber Optics", "Infrared Night Vision", "Camera Lenses", "Solar Panels", "Wide-angle Lenses"],
    33: ["Semiconductors", "Wood Preservation", "Lead-acid Batteries", "Glass Clarification"],
    34: ["Photocopiers", "Glass Tinting", "Anti-dandruff Shampoo", "Vitamin Supplements", "Solar Cells"],
    35: ["Flame Retardants", "Photography", "Water Purification", "Drilling Fluids", "Agriculture Chemicals"],
    36: ["High-speed Flash Lamps", "Fluorescent Tubes", "MRI Scanners", "Satellite Propellant"],
    37: ["Atomic Clocks", "Vacuum Tube Getters", "Fiber Optics", "Night Vision Devices"],
    38: ["Red Fireworks", "Nuclear Power (Isotopes)", "Optical Glass", "Phosphorescent Paints"],
    39: ["TV & Smartphone Screens", "Camera Lenses", "Superconductors", "Microwave Filters", "Laser Crystals"],
    40: ["Nuclear Reactor Cladding", "Chemical Pipelines", "Abrasives", "Ceramic Glazes", "Artificial Diamonds"],
    41: ["Jet Engines", "Superconducting Magnets", "MRI Machines", "Pipelines", "Jewelry"],
    42: ["Steel Alloys", "Industrial Lubricants", "Missile Parts", "Fertilizers", "Filaments"],
    43: ["Medical Imaging", "Nuclear Medicine", "Corrosion Protection", "Catalysts"],
    44: ["Electrical Contacts", "Solar Cells", "Jewelry Plating", "Chemical Synthesis Catalyst"],
    45: ["Catalytic Converters", "Searchlights", "Electrical Links", "Optical Fibers", "Glass Production"],
    46: ["Catalytic Converters", "Hydrogen Purification", "Dentistry", "Jewelry (White Gold)", "Electronics"],
    47: ["Photography", "Jewelry", "Electronics", "Solar Panels", "Mirrors"],
    48: ["NiCd Batteries", "Nuclear Control Rods", "Solar Panels", "Plastic Stabilizers", "Yellow Pigments"],
    49: ["LCD & Touchscreens", "Flat-panel Displays", "Low-melting Alloys", "Vacuum Seals"],
    50: ["Food Cans Lining", "Solder", "Bronze & Pewter", "Glass Coatings", "Anti-corrosion"],
    51: ["Flame Retardants", "Lead-acid Batteries", "Semiconductors", "Infrared Detectors"],
    52: ["Thermoelectric Devices", "Rubber Vulcanization", "Solar Panels", "Cast Iron Additive"],
    53: ["Antiseptics", "Thyroid Medical Treatment", "Photography", "Cloud Seeding", "Animal Feed"],
    54: ["Flash Lamps", "Ion Thrusters", "Medical Anesthesia", "Projector Lamps", "High-pressure Arc Lamps"],
    55: ["Atomic Clocks", "Oil Drilling Fluids", "Vacuum Tubes", "Scintillation Counters"],
    56: ["Drilling Mud", "X-ray Contrast Agents", "Vacuum Tubes", "Green Fireworks", "Glassmaking"],
    57: ["Camera Lenses", "Hybrid Car Batteries", "Carbon Arc Lighting", "Oil Cracking Catalyst"],
    58: ["Lighter Flints", "Catalytic Converters", "Glass Polishing", "Self-cleaning Ovens", "Carbon Arc Lamps"],
    59: ["Aircraft Engines", "Studio Lighting", "High-strength Magnets", "Flint Steel", "Yellow Glass"],
    60: ["Strong Neodymium Magnets", "High-power Lasers", "Glass Tinting", "Hard Disk Drives", "Wind Turbine Generators"]
};



const environmentData = {
    1: { name: "Hydrogen", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "0.5 Kg", points: ["Zero emissions at use", "High production energy", "Leaks impact ozone"] },
    2: { name: "Helium", recyclable: "No", toxicity: "Low", bioaccumulation: "No", co2: "2.1 Kg", points: ["Non-renewable resource", "Escapes atmosphere", "Used in cryogenics"] },
    3: { name: "Lithium", recyclable: "Partially", toxicity: "Medium", bioaccumulation: "No", co2: "15 Kg", points: ["Water-intensive mining", "Toxic if leaked", "Essential for EVs"] },
    4: { name: "Beryllium", recyclable: "Yes", toxicity: "High", bioaccumulation: "No", co2: "120 Kg", points: ["Highly toxic dust", "Carcinogenic risk", "Rare metal impact"] },
    5: { name: "Boron", recyclable: "Yes", toxicity: "Low", bioaccumulation: "Low", co2: "3.5 Kg", points: ["Low soil toxicity", "Used in glass recycling", "Safe in small doses"] },
    6: { name: "Carbon", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "1.2 Kg", points: ["Core of life cycles", "CO2 is greenhouse gas", "Graphite mining impact"] },
    7: { name: "Nitrogen", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "0.8 Kg", points: ["Runoff causes algae", "Essential for fertilizer", "78% of atmosphere"] },
    8: { name: "Oxygen", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "0.4 Kg", points: ["Essential for life", "Ozone layer protection", "Supports combustion"] },
    9: { name: "Fluorine", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "18 Kg", points: ["Strong greenhouse gases", "Highly reactive", "Water fluoridation issues"] },
    10: { name: "Neon", recyclable: "No", toxicity: "Low", bioaccumulation: "No", co2: "4.5 Kg", points: ["Atmospheric extraction", "Chemically inert", "No soil impact"] },
    11: { name: "Sodium", recyclable: "Yes", toxicity: "Medium", bioaccumulation: "No", co2: "2.8 Kg", points: ["Highly reactive with water", "Abundant in oceans", "Salt runoff issues"] },
    12: { name: "Magnesium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "14 Kg", points: ["Lightweight recycling", "Energy-heavy extraction", "Safe for plants"] },
    13: { name: "Aluminium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "12 Kg", points: ["Infinite recyclability", "High energy refining", "Bauxite mining impact"] },
    14: { name: "Silicon", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "6.5 Kg", points: ["Silicon dust risk", "Basis of solar tech", "Abundant in crust"] },
    15: { name: "Phosphorus", recyclable: "Partially", toxicity: "Medium", bioaccumulation: "Yes", co2: "5.2 Kg", points: ["Water eutrophication", "Mining depletion risk", "Vital for farming"] },
    16: { name: "Sulfur", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "0.6 Kg", points: ["Acid rain precursor", "Industrial byproduct", "Used in soil pH"] },
    17: { name: "Chlorine", recyclable: "No", toxicity: "High", bioaccumulation: "No", co2: "1.5 Kg", points: ["Ozone layer damage", "Water disinfection", "Toxic gas risk"] },
    18: { name: "Argon", recyclable: "No", toxicity: "Low", bioaccumulation: "No", co2: "3.2 Kg", points: ["Inert atmosphere", "Air separation source", "Safe for soil"] },
    19: { name: "Potassium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "1.1 Kg", points: ["Fertilizer essential", "High water solubility", "Low toxicity"] },
    20: { name: "Calcium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "0.9 Kg", points: ["Cement CO2 impact", "Soil neutralizer", "Safe for life"] },
    21: { name: "Scandium", recyclable: "Partially", toxicity: "Low", bioaccumulation: "No", co2: "250 Kg", points: ["Rare earth impact", "High extraction cost", "Low toxicity"] },
    22: { name: "Titanium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "35 Kg", points: ["Corrosion resistant", "Refining is energy heavy", "Inert in soil"] },
    23: { name: "Vanadium", recyclable: "Yes", toxicity: "Medium", bioaccumulation: "Yes", co2: "28 Kg", points: ["Toxic to water life", "Used in green batteries", "Mining waste risk"] },
    24: { name: "Chromium", recyclable: "Yes", toxicity: "High", bioaccumulation: "Yes", co2: "22 Kg", points: ["Hexavalent form is toxic", "Groundwater pollutant", "Stainless steel use"] },
    25: { name: "Manganese", recyclable: "Yes", toxicity: "Medium", bioaccumulation: "No", co2: "4.5 Kg", points: ["Essential nutrient", "Soil contamination risk", "Steel production use"] },
    26: { name: "Iron", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "1.9 Kg", points: ["Low recycling energy", "Massive mining scale", "Essential for life"] },
    27: { name: "Cobalt", recyclable: "Yes", toxicity: "Medium", bioaccumulation: "Yes", co2: "25 Kg", points: ["Ethical mining issues", "Toxic to aquatic life", "Battery critical"] },
    28: { name: "Nickel", recyclable: "Yes", toxicity: "Medium", bioaccumulation: "Yes", co2: "18 Kg", points: ["Tailings management", "Carcinogenic dust", "Highly recyclable"] },
    29: { name: "Copper", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "3.4 Kg", points: ["Infinite recycling", "Copper salts toxic", "Mining acid drainage"] },
    30: { name: "Zinc", recyclable: "Yes", toxicity: "Low", bioaccumulation: "Yes", co2: "3.1 Kg", points: ["Toxic to fish", "Corrosion protection", "Crucial for health"] },
    31: { name: "Gallium", recyclable: "Partially", toxicity: "Low", bioaccumulation: "No", co2: "140 Kg", points: ["LED & Solar usage", "Rare byproduct", "Low environmental risk"] },
    32: { name: "Germanium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "210 Kg", points: ["Fiber optics usage", "Rare metal impact", "Low toxicity"] },
    33: { name: "Arsenic", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "12 Kg", points: ["Groundwater poison", "Strict disposal needed", "Persistent toxin"] },
    34: { name: "Selenium", recyclable: "Partially", toxicity: "Medium", bioaccumulation: "Yes", co2: "15 Kg", points: ["Bio-accumulates easily", "Required in trace", "High dose toxicity"] },
    35: { name: "Bromine", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "4.5 Kg", points: ["Ozone depletion risk", "Flame retardant issues", "Toxic to organisms"] },
    36: { name: "Krypton", recyclable: "No", toxicity: "Low", bioaccumulation: "No", co2: "8 Kg", points: ["Atmospheric rare gas", "Non-toxic", "Used in lighting"] },
    37: { name: "Rubidium", recyclable: "No", toxicity: "Medium", bioaccumulation: "No", co2: "45 Kg", points: ["Reactive in water", "Rarely recycled", "Low soil impact"] },
    38: { name: "Strontium", recyclable: "Partially", toxicity: "Low", bioaccumulation: "Yes", co2: "12 Kg", points: ["Radioactive isotope risk", "Similar to calcium", "Found in fireworks"] },
    39: { name: "Yttrium", recyclable: "No", toxicity: "Medium", bioaccumulation: "No", co2: "180 Kg", points: ["Rare earth tailings", "Dust is lung hazard", "Tech metal demand"] },
    40: { name: "Zirconium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "18 Kg", points: ["Corrosion resistant", "Low toxicity", "Nuclear fuel cladding"] },
    41: { name: "Niobium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "42 Kg", points: ["Hardening steel", "Low environmental risk", "Mining in Brazil"] },
    42: { name: "Molybdenum", recyclable: "Yes", toxicity: "Low", bioaccumulation: "Yes", co2: "22 Kg", points: ["Essential micronutrient", "Mine site pollution", "Steel alloy usage"] },
    43: { name: "Technetium", recyclable: "No", toxicity: "High", bioaccumulation: "Yes", co2: "N/A", points: ["Radioactive waste", "Medical tracer use", "Synthetic element"] },
    44: { name: "Ruthenium", recyclable: "Yes", toxicity: "Medium", bioaccumulation: "No", co2: "350 Kg", points: ["Rare catalyst metal", "Oxide is toxic", "Electronics demand"] },
    45: { name: "Rhodium", recyclable: "Yes", toxicity: "Medium", bioaccumulation: "No", co2: "2200 Kg", points: ["Extremely rare", "Catalytic converters", "High mining impact"] },
    46: { name: "Palladium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "1400 Kg", points: ["Emission reduction", "High value recycling", "Rare earth mining"] },
    47: { name: "Silver", recyclable: "Yes", toxicity: "Medium", bioaccumulation: "Yes", co2: "120 Kg", points: ["Antibacterial effect", "Toxic to microbes", "Highly recycled"] },
    48: { name: "Cadmium", recyclable: "Partially", toxicity: "High", bioaccumulation: "Yes", co2: "14 Kg", points: ["Heavy metal poison", "Battery disposal risk", "Strictly regulated"] },
    49: { name: "Indium", recyclable: "Partially", toxicity: "Low", bioaccumulation: "No", co2: "210 Kg", points: ["LCD screen critical", "Scarcity risk", "Low toxicity"] },
    50: { name: "Tin", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "16 Kg", points: ["Artisanal mining risk", "Non-toxic plating", "Low melting energy"] },
    51: { name: "Antimony", recyclable: "Partially", toxicity: "High", bioaccumulation: "Yes", co2: "18 Kg", points: ["Flame retardant risk", "Toxic to inhale", "Mining tailings"] },
    52: { name: "Tellurium", recyclable: "Partially", toxicity: "Medium", bioaccumulation: "No", co2: "140 Kg", points: ["Rare solar material", "Smell hazard", "Toxicity in water"] },
    53: { name: "Iodine", recyclable: "No", toxicity: "Medium", bioaccumulation: "Yes", co2: "6 Kg", points: ["Essential for health", "Water disinfection", "Seaweed source"] },
    54: { name: "Xenon", recyclable: "No", toxicity: "Low", bioaccumulation: "No", co2: "12 Kg", points: ["Extracted from air", "Anesthetic use", "Safe greenhouse gas"] },
    55: { name: "Cesium", recyclable: "No", toxicity: "Medium", bioaccumulation: "Yes", co2: "55 Kg", points: ["Highly reactive", "Isotope safety risk", "Rarely recycled"] },
    56: { name: "Barium", recyclable: "No", toxicity: "Medium", bioaccumulation: "No", co2: "8 Kg", points: ["Drilling mud impact", "Toxic if soluble", "Mining waste"] },
    57: { name: "Lanthanum", recyclable: "Partially", toxicity: "Low", bioaccumulation: "No", co2: "160 Kg", points: ["EV battery usage", "Rare earth mining", "Low aquatic risk"] },
    58: { name: "Cerium", recyclable: "Partially", toxicity: "Low", bioaccumulation: "No", co2: "140 Kg", points: ["Catalytic use", "Self-cleaning ovens", "Abundant rare earth"] },
    59: { name: "Praseodymium", recyclable: "No", toxicity: "Low", bioaccumulation: "No", co2: "280 Kg", points: ["Magnet production", "Mining impact high", "Low toxicity"] },
    60: { name: "Neodymium", recyclable: "Yes", toxicity: "Low", bioaccumulation: "No", co2: "320 Kg", points: ["Critical for wind power", "Mining radioactivity", "Highly recycled magnets"] }
};




const safetyData = {
    1: { 
        level: "HIGH RISK", status: "Flammable Gas", isSafe: false, 
        advices: [
            "Extremely flammable gas, keep away from fire",
            "Store cylinders in a very cool place",
            "Colorless gas, check for leaks with sensors",
            "Avoid static electricity when handling this gas",
            "Always use specialized non-sparking safety tools",
            "Highly explosive when mixed with outdoor air"
        ],
        locations: ["Open Field", "Gas Laboratory", "Ventilated Bunker", "Emergency Test Zone"],
        precautions: [
            "Keep away from heat and sparks",
            "Use specialized non-sparking safety tools",
            "Store cylinders in upright secured position",
            "Monitor area for potential gas leaks",
            "Ground all equipment to prevent static",
            "Ensure maximum ventilation in work space"
        ] 
    },
    2: { 
        level: "LOW RISK", status: "Safe / Natural", isSafe: true, 
        advices: [
            "Inert gas, does not react with chemicals",
            "Safe for balloons and industrial cooling systems",
            "Do not inhale directly from high pressure",
            "Non-toxic and very safe for general use",
            "Store tanks away from direct hot sunlight",
            "Always maintain good ventilation in closed rooms"
        ],
        locations: ["Home", "Classroom", "Laboratory", "Public Parks"],
        precautions: [
            "Avoid using high pressure gas tanks",
            "Ensure constant fresh air ventilation flow",
            "Keep tanks away from small children",
            "Check valve integrity before every use",
            "Store in cool and dry place",
            "Handle heavy cylinders with safety gear"
        ] 
    },
    3: { 
        level: "HIGH RISK", status: "Highly Reactive", isSafe: false, 
        advices: [
            "Reacts violently with any contact with water",
            "Store strictly under protective mineral oil only",
            "Causes severe chemical burns on human skin",
            "Handle with dry stainless steel tongs only",
            "Keep in airtight containers to avoid moisture",
            "Always wear full face protection and gloves"
        ],
        locations: ["Dry Chemistry Lab", "Fume Hood", "Hazardous Storage", "Specialty Metal Lab"],
        precautions: [
            "Store strictly under protective mineral oil",
            "Wear high grade chemical safety goggles",
            "Avoid any contact with liquid water",
            "Handle only with dry stainless tongs",
            "Use moisture-free containers for storage",
            "Wear heat-resistant gloves during handling"
        ] 
    },
    4: { 
        level: "HIGH RISK", status: "Toxic Metal", isSafe: false, 
        advices: [
            "Highly toxic dust, avoid any direct inhalation",
            "Potential carcinogenic hazard to human health",
            "Handle only inside a certified safety cabinet",
            "Wear a full body protective safety suit",
            "Always wash hands after handling this metal",
            "Store in a secure and locked location"
        ],
        locations: ["Enclosed Lab", "Industrial Facility", "Safety Cabinet", "Toxicology Center"],
        precautions: [
            "Use HEPA respiration masks for safety",
            "Avoid creating any fine metal dust",
            "Wear a full body safety suit",
            "Shower immediately after handling this metal",
            "Work inside certified safety cabinets only",
            "Follow strict hazardous waste disposal rules"
        ] 
    },
    5: { 
        level: "LOW RISK", status: "Stable / Safe", isSafe: true, 
        advices: [
            "Safe solid material in its normal form",
            "Used safely in medical and industrial fields",
            "Non-toxic, but avoid creating fine dust",
            "Store in a dry and cool environment",
            "Wash hands thoroughly after use every time",
            "Stable under standard room temperature conditions"
        ],
        locations: ["Home", "School Lab", "Industrial Lab", "Medical Room"],
        precautions: [
            "Keep in dry and cool storage",
            "Avoid any direct contact with eyes",
            "Wash hands thoroughly after every use",
            "Store at standard room temperature conditions",
            "Avoid creating airborne solid dust particles",
            "Follow standard laboratory hygiene protocols"
        ] 
    },
    6: { 
        level: "LOW RISK", status: "Safe / Natural", isSafe: true, 
        advices: [
            "Essential for life, safe in solid form",
            "Stable and non-reactive under normal conditions",
            "Safe to touch with bare hands daily",
            "Keep away from very strong oxidizing acids",
            "Avoid inhaling fine carbon dust or soot",
            "Store in a clean and dry place"
        ],
        locations: ["Anywhere Outdoor", "Home", "Kitchen", "Science Lab"],
        precautions: [
            "Keep away from strong oxidizing acids",
            "Avoid inhaling fine carbon dust particles",
            "Follow standard daily hygiene safety rules",
            "Store in cool and dry places",
            "Protect from extreme heat and fire",
            "Keep storage area clean and organized"
        ] 
    },
    7: { 
        level: "LOW RISK", status: "Stable Gas", isSafe: true, 
        advices: [
            "Makes up most of the Earth's atmosphere",
            "Non-flammable gas, safe for food packaging",
            "Handle liquid form with extreme safety care",
            "Ensure room has a constant fresh airflow",
            "Check all pressure valves for any leaks",
            "Keep cylinders secured in an upright position"
        ],
        locations: ["Home", "Food Factory", "Laboratory", "Hospitals"],
        precautions: [
            "Ensure constant fresh air ventilation flow",
            "Handle liquid form with extreme care",
            "Avoid any direct skin or eye contact",
            "Check all pressure valves for leaks",
            "Secure gas cylinders in upright position",
            "Monitor oxygen levels in closed rooms"
        ] 
    },
    8: { 
        level: "LOW RISK", status: "Vital / Safe", isSafe: true, 
        advices: [
            "Vital for breathing and supporting human life",
            "Highly stable gas under normal room pressure",
            "Supports combustion, keep away from open flames",
            "Keep away from any grease or oils",
            "No smoking near high concentration oxygen tanks",
            "Store cylinders in a well ventilated area"
        ],
        locations: ["Outdoor Area", "Hospital", "Space Station", "Diving Centers"],
        precautions: [
            "Keep away from any grease or oils",
            "Strictly no smoking near oxygen tanks",
            "Check gas regulator safety before use",
            "Secure all cylinders from falling down",
            "Store in a well ventilated area",
            "Avoid using oxygen near open flames"
        ] 
    },
    9: { 
        level: "HIGH RISK", status: "Dangerous Gas", isSafe: false, 
        advices: [
            "Extremely corrosive gas, handle with extreme care",
            "Fatal if inhaled even in small doses",
            "Reacts violently with almost all metal surfaces",
            "Causes severe and deep chemical skin burns",
            "Use only in specialized sealed gas chambers",
            "Wear high-grade specialized gas masks always"
        ],
        locations: ["Specialized Gas Lab", "Toxic Exhaust Hood", "Research Center", "Sealed Chamber"],
        precautions: [
            "Use specialized high grade gas masks",
            "Check equipment regularly for chemical corrosion",
            "Use double-sealed containers for storage",
            "Remote handling is required for safety",
            "Install automatic gas leak detection sensors",
            "Neutralize spills with appropriate chemical agents"
        ] 
    },
    10: { 
        level: "LOW RISK", status: "Inert Gas", isSafe: true, 
        advices: [
            "Non-reactive noble gas, very safe to use",
            "Non-toxic and used widely in neon signs",
            "Safe for general use in laboratory lighting",
            "Monitor gas pressure in all glass tubes",
            "Prevent bulb breakage to avoid sharp glass",
            "Check all electrical connections before turning on"
        ],
        locations: ["Home", "Lighting Factory", "Laboratory", "Neon Sign Shop"],
        precautions: [
            "Monitor gas pressure inside glass tubes",
            "Safe for general and laboratory use",
            "Check all electrical connections for safety",
            "Prevent glass bulb breakage and cuts",
            "Store tanks in cool dry areas",
            "Handle large cylinders with proper carts"
        ] 
    },
    11: { 
        level: "HIGH RISK", status: "Highly Reactive", isSafe: false, 
        advices: [
            "Explodes violently when touching any water",
            "Store strictly under protective mineral oil",
            "Causes immediate severe skin chemical burns",
            "Handle only with dry metal tools",
            "Never use water on sodium fires",
            "Always wear a full face shield"
        ],
        locations: ["Chemical Lab", "Fume Hood", "Controlled Area", "Safe Storage Vault"],
        precautions: [
            "Use dry chemical fire extinguishers only",
            "Wear a full protective face shield",
            "Handle only with dry stainless tongs",
            "Keep away from any water source",
            "Store strictly under dry mineral oil",
            "Keep in a locked safety cabinet"
        ] 
    },
    12: { 
        level: "MEDIUM RISK", status: "Flammable Metal", isSafe: false, 
        advices: [
            "Burns with a very bright light",
            "Avoid inhaling white magnesium oxide smoke",
            "Keep metal strips away from moisture",
            "Use Class D fire extinguishers only",
            "Wear UV goggles when burning metal",
            "Stable in solid mass at room temp"
        ],
        locations: ["Science Lab", "Metal Workshop", "Outdoor Safe Zone", "Fireproof Testing Bay"],
        precautions: [
            "Avoid inhaling white metallic oxide fumes",
            "Use Class D fire extinguishers only",
            "Protect metal from humidity and moisture",
            "Wear UV protective safety goggles always",
            "Keep away from strong acidic chemicals",
            "Store in fireproof metal containers"
        ] 
    },
    13: { 
        level: "LOW RISK", status: "Safe Metal", isSafe: true, 
        advices: [
            "Non-toxic and very safe for food",
            "Corrosion resistant under normal daily use",
            "Avoid contact with liquid mercury metal",
            "Stable even at very high temperatures",
            "Wear gloves to avoid sharp edges",
            "Recycle scrap metal for environmental safety"
        ],
        locations: ["Home", "Kitchen", "Aluminium Factory", "Construction Site"],
        precautions: [
            "Avoid any contact with liquid mercury",
            "Stable under very high heat conditions",
            "Wear gloves for sharp metal edges",
            "Follow standard industrial workshop safety rules",
            "Keep surfaces clean and free of grease",
            "Store in dry and organized racks"
        ] 
    },
    14: { 
        level: "MEDIUM RISK", status: "Irritant Solid", isSafe: false, 
        advices: [
            "Dust causes mild respiratory tract irritation",
            "Non-toxic solid in bulk crystal form",
            "Wear a mask when cutting wafers",
            "Wash skin if exposed to dust",
            "Ensure proper industrial dust extraction systems",
            "Use protective eyewear during mechanical work"
        ],
        locations: ["Industrial Lab", "Workshop", "Testing Room", "Electronics Center"],
        precautions: [
            "Wear a protective dust mask always",
            "Wash skin thoroughly if dust exposed",
            "Ensure localized dust extraction is active",
            "Use protective eyewear during all work",
            "Avoid creating fine airborne dust particles",
            "Store in a cool dry place"
        ] 
    },
    15: { 
        level: "HIGH RISK", status: "Reactive / Toxic", isSafe: false, 
        advices: [
            "Can ignite spontaneously in warm air",
            "Highly toxic if swallowed by mistake",
            "Always store safely under deep water",
            "Causes long-term bone and tissue damage",
            "Work only in ventilated fume hoods",
            "Wear heavy-duty chemical resistant gloves"
        ],
        locations: ["Toxic Substance Lab", "Water-Safe Bench", "Emergency Unit", "Restricted Zone"],
        precautions: [
            "Keep metal stored under deep water",
            "Wear heavy-duty chemical resistant gloves",
            "Secure in a locked storage vault",
            "Work inside a ventilated fume hood",
            "Avoid contact with air or heat",
            "Wear a full face safety shield"
        ] 
    },
    16: { 
        level: "MEDIUM RISK", status: "Reactive Solid", isSafe: false, 
        advices: [
            "Flammable dust, keep from open heat",
            "Low toxicity but avoid skin contact",
            "Produces pungent odor when burnt slowly",
            "Keep away from strong oxidizing chemicals",
            "Wash hands thoroughly after handling powder",
            "Use in well-ventilated open testing areas"
        ],
        locations: ["Outdoor Area", "Chemistry Lab", "Ventilated Shop", "Open Testing Bay"],
        precautions: [
            "Avoid creating dangerous airborne dust clouds",
            "Keep away from strong oxidizing chemicals",
            "Wash hands thoroughly after every use",
            "Use localized exhaust ventilation systems always",
            "Protect from open flames and sparks",
            "Store in tightly sealed plastic containers"
        ] 
    },
    17: { 
        level: "HIGH RISK", status: "Toxic Gas", isSafe: false, 
        advices: [
            "Severe lung irritant, do not breathe",
            "Strong oxidizer, keep away from fuel",
            "Highly corrosive to most common metals",
            "Fatal in high doses, use sensors",
            "Check for leaks using ammonia solution",
            "Keep emergency safety showers very nearby"
        ],
        locations: ["Sealed Gas Chamber", "Fume Hood", "Chemical Plant", "Safety Enclosure"],
        precautions: [
            "Use specialized chlorine-rated gas masks",
            "Check all valves for gas leaks",
            "Install automatic gas detection safety sensors",
            "Keep emergency showers ready for use",
            "Work only in high-flow fume hoods",
            "Wear acid-resistant full body suit"
        ] 
    },
    18: { 
        level: "LOW RISK", status: "Inert Gas", isSafe: true, 
        advices: [
            "Non-toxic and non-flammable noble gas",
            "Does not react with any chemicals",
            "Monitor oxygen levels in small rooms",
            "Check tank pressure valves before use",
            "Use only in well ventilated areas",
            "Always secure cylinders in upright position"
        ],
        locations: ["Home", "Laboratory", "Classroom", "Industrial Site"],
        precautions: [
            "Monitor oxygen levels in work area",
            "Check tank pressure before using gas",
            "Use in a well ventilated area",
            "Secure gas cylinders in upright position",
            "Inspect valves for mechanical leaks regularly",
            "Store in cool and dry locations"
        ] 
    },
    19: { 
        level: "HIGH RISK", status: "Highly Reactive", isSafe: false, 
        advices: [
            "Violent explosive reaction with any water",
            "Causes immediate deep skin tissue burns",
            "Store under vacuum or mineral oil",
            "Soft metal, easy to cut safely",
            "Handle with dry stainless steel forceps",
            "Wear flame-resistant coats and face shields"
        ],
        locations: ["Professional Lab", "Glove Box", "Fume Hood", "Chemical Bunker"],
        precautions: [
            "Ensure zero contact with liquid water",
            "Full face shield is strictly required",
            "Handle with dry stainless steel forceps",
            "Wear a flame-resistant laboratory coat",
            "Store strictly under protective mineral oil",
            "Work only in inert gas atmospheres"
        ] 
    },
    20: { 
        level: "MEDIUM RISK", status: "Reactive Metal", isSafe: false, 
        advices: [
            "Reacts with moisture to form hydrogen",
            "Fine dust is a fire hazard",
            "Stable in very dry air conditions",
            "Essential nutrient but handle carefully raw",
            "Store in cool and dry containers",
            "Keep away from all strong acids"
        ],
        locations: ["Laboratory", "Agricultural Site", "Industrial Testing", "Geology Room"],
        precautions: [
            "Store in strictly dry environmental conditions",
            "Avoid any direct skin or eye contact",
            "Use protective chemical resistant gloves",
            "Keep away from all strong acids",
            "Avoid creating fine metal dust particles",
            "Follow standard chemical storage safety rules"
        ] 
    },
    21: { 
        level: "LOW RISK", status: "Stable Metal", isSafe: true, 
        advices: [
            "Very low toxicity, safe for handling",
            "Stable solid under most normal conditions",
            "No specific chemical hazards for users",
            "Wash hands after handling fine dust",
            "Use standard industrial tool safety rules",
            "Recycle all metal scrap properly"
        ],
        locations: ["Home", "Workshop", "Art Studio", "Metallurgy Lab"],
        precautions: [
            "No specific chemical hazard for users",
            "Wash hands after handling metal dust",
            "Follow standard industrial tool safety rules",
            "Recycle all metal scrap properly always",
            "Wear safety glasses for mechanical work",
            "Keep the workspace clean and organized"
        ] 
    },
    22: { 
        level: "LOW RISK", status: "Biocompatible", isSafe: true, 
        advices: [
            "Non-toxic metal used in medical implants",
            "Highly resistant to any chemical corrosion",
            "Safe to touch with bare skin",
            "Avoid high-speed grinding without water cooling",
            "Handle with clean gloves for purity",
            "Always sterilize if used for medicine"
        ],
        locations: ["Hospital", "Clinic", "Research Center", "Testing Lab"],
        precautions: [
            "Avoid high-speed grinding without water cooling",
            "Handle with clean gloves for purity",
            "Keep surfaces free of any grease",
            "Sterilize properly if used in medicine",
            "Wear eye protection against metal chips",
            "Use clean tools for handling implants"
        ] 
    },
    23: { 
        level: "MEDIUM RISK", status: "Toxic Metal", isSafe: false, 
        advices: [
            "Metal dust is toxic if inhaled",
            "Avoid creating fine airborne metal particles",
            "Stable in bulk solid form daily",
            "Potential industrial health hazard for workers",
            "Wear a respiratory mask during processing",
            "Ensure good airflow in the workspace"
        ],
        locations: ["Mining Facility", "Metallurgy Lab", "Factory Exhaust", "Safety Booth"],
        precautions: [
            "Wear a respiratory mask during work",
            "Avoid ingestion of any metal particles",
            "Wash hands thoroughly after handling metal",
            "Ensure good industrial ventilation in area",
            "Wear safety goggles for eye protection",
            "Follow strict industrial hygiene protocols always"
        ] 
    },
    24: { 
        level: "MEDIUM RISK", status: "Toxic / Irritant", isSafe: false, 
        advices: [
            "Hexavalent forms are extremely toxic chemicals",
            "Can cause severe skin allergy reactions",
            "Highly resistant to rust and corrosion",
            "Handle always with thick rubber gloves",
            "Wear eye protection during plating work",
            "Monitor air quality in industrial plants"
        ],
        locations: ["Electroplating Shop", "Industrial Lab", "Treatment Plant", "Quality Control"],
        precautions: [
            "Wear thick chemical resistant rubber gloves",
            "Use eye protection for chemical splashes",
            "Avoid any direct skin or eye contact",
            "Monitor air quality in plating shops",
            "Wash immediately if skin contact occurs",
            "Follow hazardous chemical waste disposal rules"
        ] 
    },
    25: { 
        level: "MEDIUM RISK", status: "Essential Irritant", isSafe: false, 
        advices: [
            "Avoid inhaling fine black metal dust",
            "Essential nutrient in very small doses",
            "Stable solid under standard room conditions",
            "Wear safety glasses against metal filings",
            "Always wear standard industrial work gloves",
            "Store in a dry and cool place"
        ],
        locations: ["Steel Plant", "Nutrition Lab", "Geology Lab", "Testing Center"],
        precautions: [
            "Avoid inhaling fine metallic dust particles",
            "Protect eyes from flying metal filings",
            "Wear standard industrial protective work gloves",
            "Store in a dry and cool area",
            "Wash hands before eating or smoking",
            "Maintain clean workspace to prevent dust"
        ] 
    },
    26: { 
        level: "LOW RISK", status: "Safe Metal", isSafe: true, 
        advices: [
            "Non-toxic and essential for human blood",
            "Rusts quickly in high moisture areas",
            "Stable and very safe to handle",
            "Keep dry to prevent oxidation rust",
            "Wear gloves for sharp metal edges",
            "Standard workshop safety rules always apply"
        ],
        locations: ["Home", "Construction Site", "Workshop", "Garage"],
        precautions: [
            "Keep dry to avoid oxidation rust",
            "Wear gloves for sharp metal edges",
            "Follow standard industrial workshop safety rules",
            "Prevent iron scale buildup on surfaces",
            "Store in a dry organized place",
            "Keep away from strong corrosive chemicals"
        ] 
    },
    27: { 
        level: "MEDIUM RISK", status: "Potential Allergen", isSafe: false, 
        advices: [
            "Can cause significant skin allergy risks",
            "Metal dust is toxic if inhaled",
            "Stable solid metal with magnetic properties",
            "Avoid direct skin contact for long",
            "Wash hands thoroughly after handling magnets",
            "Keep away from extreme heat sources"
        ],
        locations: ["Magnetic Research Lab", "Metal Shop", "Electronic Factory", "Testing Bay"],
        precautions: [
            "Avoid direct skin contact for long",
            "Follow specialized magnet handling safety rules",
            "Wash after handling magnetic materials thoroughly",
            "Wear safety goggles during metal cutting",
            "Store away from all fire hazards",
            "Ensure proper exhaust in the workshop"
        ] 
    },
    28: { 
        level: "MEDIUM RISK", status: "Skin Sensitizer", isSafe: false, 
        advices: [
            "Common allergen, avoid direct skin contact",
            "Potential carcinogenic risk in dust form",
            "Highly resistant to chemical corrosion processes",
            "Stable solid at normal room temperatures",
            "Wear nitrile gloves when handling salts",
            "Properly dispose of all chemical waste"
        ],
        locations: ["Plating Lab", "Jewelry Workshop", "Battery Factory", "Industrial Site"],
        precautions: [
            "Use protective barrier cream on skin",
            "Wear chemical resistant nitrile safety gloves",
            "Avoid breathing any toxic chemical vapors",
            "Follow proper hazardous waste disposal methods",
            "Wash hands before leaving work area",
            "Wear eye protection during chemical handling"
        ] 
    },
    29: { 
        level: "LOW RISK", status: "Safe Metal", isSafe: true, 
        advices: [
            "Natural antimicrobial properties on its surface",
            "Non-toxic metal, safe for plumbing pipes",
            "Highly conductive for electricity and heat",
            "Essential for maintaining good human health",
            "Avoid contact with strong ammonia liquids",
            "Keep copper surfaces clean and dry"
        ],
        locations: ["Home", "Electrical Shop", "Hospital", "Kitchen"],
        precautions: [
            "Avoid contact with strong ammonia liquids",
            "Keep all copper surfaces clean daily",
            "Recycle all metal scrap efficiently always",
            "Follow standard industrial material handling rules",
            "Wear gloves when handling heavy parts",
            "Store in dry environment to prevent"
        ] 
    },
    30: { 
        level: "LOW RISK", status: "Safe Metal", isSafe: true, 
        advices: [
            "Essential nutrient for the human body",
            "Non-toxic and safe for general handling",
            "Corrosion resistant coating for other metals",
            "Avoid contact with strong acidic liquids",
            "Stable solid under all normal uses",
            "Handle heavy metal bars with care"
        ],
        locations: ["Home", "Health Clinic", "Laboratory", "Metal Factory"],
        precautions: [
            "Avoid contact with strong acidic liquids",
            "Follow standard hygiene and washing rules",
            "Stable material under all normal uses",
            "Handle heavy metal bars with care",
            "Wear gloves for industrial material handling",
            "Store in a dry organized warehouse"
        ] 
    },
    31: { 
        level: "LOW RISK", status: "Stable Metal", isSafe: true, 
        advices: [
            "Melts easily in your warm hand",
            "Non-toxic metal safe for science demos",
            "Stable solid at standard room temperature",
            "Avoid contact with aluminum metal surfaces",
            "Store in clean plastic storage containers",
            "Do not ingest this metal material"
        ],
        locations: ["Home Lab", "Science Classroom", "Electronics Lab", "Art Studio"],
        precautions: [
            "Handle with gloves to keep metal clean",
            "Avoid contact with aluminum surfaces always",
            "Store in clean plastic storage containers",
            "Do not ingest or swallow metal material",
            "Keep away from high heat sources",
            "Maintain clean workspace during all experiments"
        ] 
    },
    32: { 
        level: "LOW RISK", status: "Stable Metalloid", isSafe: true, 
        advices: [
            "Non-toxic solid used in fiber optics",
            "Stable material when exposed to air",
            "Semiconductor properties for high-tech electronics",
            "Wear eye protection when cutting crystals",
            "Avoid inhaling very fine crystal dust",
            "Handle with clean-room safety gloves"
        ],
        locations: ["Tech Lab", "Clean Room", "Optical Center", "Semiconductor Plant"],
        precautions: [
            "Wear eye protection when cutting crystals",
            "Avoid inhaling fine crystal dust particles",
            "Handle with clean-room safety gloves only",
            "Store in a dry and cool environment",
            "Use specialized tools for handling wafers",
            "Follow standard clean room safety protocols"
        ] 
    },
    33: { 
        level: "HIGH RISK", status: "Highly Toxic", isSafe: false, 
        advices: [
            "Potent poison, handle with extreme caution",
            "Known carcinogenic hazard to human health",
            "Avoid any inhalation of toxic dust",
            "Strict laboratory handling protocols are required",
            "Use only inside certified safety cabinets",
            "Zero environmental release is strictly mandatory"
        ],
        locations: ["Toxicology Lab", "Safety Cabinet", "Biohazard Zone", "Special Waste Unit"],
        precautions: [
            "Wear full respiratory protection at all times",
            "Zero environmental release is strictly mandatory",
            "Follow all hazardous waste safety protocols",
            "Wear chemical-resistant apron and heavy gloves",
            "Work only inside certified safety hoods",
            "Monitor area with specialized toxic sensors"
        ] 
    },
    34: { 
        level: "MEDIUM RISK", status: "Essential Irritant", isSafe: false, 
        advices: [
            "Toxic in very high concentrated doses",
            "Produces a very pungent chemical odor",
            "Strong irritant to skin and eyes",
            "Essential trace element for human health",
            "Use only in ventilated fume hoods",
            "Wash thoroughly after every work session"
        ],
        locations: ["Glass Factory", "Health Lab", "Chemical Testing", "Industrial Room"],
        precautions: [
            "Use only in well ventilated hoods",
            "Avoid any direct contact with skin",
            "Wash hands thoroughly after work sessions",
            "Store away from all strong acids",
            "Wear safety goggles for eye protection",
            "Ensure proper air filtration in laboratory"
        ] 
    },
    35: { 
        level: "HIGH RISK", status: "Corrosive Liquid", isSafe: false, 
        advices: [
            "Highly volatile liquid, produces toxic vapors",
            "Causes severe and painful chemical burns",
            "Always store in very cool areas",
            "Strong oxidizer, keep away from fuels",
            "Wear specialized acid-resistant safety gloves",
            "Keep emergency showers ready for use"
        ],
        locations: ["Fume Hood", "Advanced Chem Lab", "Hazardous Site", "Chemical Storage"],
        precautions: [
            "Wear specialized acid-resistant safety gloves",
            "Use specialized vapor mask for safety",
            "Keep emergency safety showers ready",
            "Store in ventilated chemical safety cabinets",
            "Handle bottles with extreme care",
            "Neutralize spills immediately with appropriate agents"
        ] 
    },
    36: { 
        level: "LOW RISK", status: "Inert Gas", isSafe: true, 
        advices: [
            "Non-reactive and non-toxic noble gas",
            "Naturally occurring in the Earth's air",
            "Stable gas even under high pressure",
            "Monitor for potential oxygen displacement risks",
            "Secure all gas cylinders very tightly",
            "Check all valves for gas leaks"
        ],
        locations: ["Home", "Lighting Lab", "Space Research", "Industrial Hall"],
        precautions: [
            "Monitor area for oxygen displacement risks",
            "Secure all gas cylinders very tightly",
            "Check all valves for gas leaks",
            "Store cylinders in cool dry areas",
            "Handle heavy tanks with safety carts",
            "Ensure room ventilation is active"
        ] 
    },
    37: { 
        level: "HIGH RISK", status: "Highly Reactive", isSafe: false, 
        advices: [
            "Ignites spontaneously in open moist air",
            "Violent explosive reaction with any water",
            "Causes severe and deep skin burns",
            "Store strictly in vacuum or oil",
            "Handle only in argon gas atmosphere",
            "Face shields are mandatory for safety"
        ],
        locations: ["Inert Atmosphere Lab", "Glove Box", "Specialty Metal Lab", "Controlled Vault"],
        precautions: [
            "Handle only in argon atmosphere safely",
            "Zero environmental moisture allowed in lab",
            "Full face shield is strictly mandatory",
            "Store strictly in sealed glass ampoules",
            "Use remote handling tools for safety",
            "Keep away from all fire hazards"
        ] 
    },
    38: { 
        level: "MEDIUM RISK", status: "Reactive Metal", isSafe: false, 
        advices: [
            "Reacts quickly with environmental moisture",
            "Fine metal dust is highly flammable",
            "Stable solid in bulk mass form",
            "Keep away from all water sources",
            "Avoid creating dangerous airborne dust clouds",
            "Use dry sand for small fires"
        ],
        locations: ["Pyrotechnic Lab", "Chemistry Room", "Vacuum Chamber", "Safety Bunker"],
        precautions: [
            "Keep away from all water sources",
            "Avoid creating dangerous airborne dust clouds",
            "Use dry sand for metal fires",
            "Wear flame-retardant safety gear during work",
            "Store in airtight dry metal containers",
            "Handle with dry and clean tools"
        ] 
    },
    39: { 
        level: "MEDIUM RISK", status: "Stable Irritant", isSafe: false, 
        advices: [
            "Avoid inhaling fine metallic dust particles",
            "Low chronic toxicity for general users",
            "Stable solid metal under room conditions",
            "Always handle with protective safety gloves",
            "Wash hands thoroughly after handling metal",
            "Ensure localized exhaust ventilation is active"
        ],
        locations: ["Material Lab", "Alloy Factory", "Testing Facility", "Industrial Shop"],
        precautions: [
            "Avoid inhaling fine metallic dust particles",
            "Wash hands thoroughly after handling metal",
            "Ensure localized exhaust ventilation is active",
            "Wear safety glasses for mechanical work",
            "Handle with protective industrial safety gloves",
            "Keep work area clean and organized"
        ] 
    },
    40: { 
        level: "LOW RISK", status: "Stable Metal", isSafe: true, 
        advices: [
            "Highly resistant to any chemical corrosion",
            "Non-toxic material in bulk solid form",
            "Biocompatible and safe for medical use",
            "Stable under very high thermal conditions",
            "Handle sharp metal filings with care",
            "Avoid contact with hydrofluoric acid"
        ],
        locations: ["Nuclear Plant", "Industrial Lab", "Aerospace Hangar", "Power Station"],
        precautions: [
            "No special hazard for bulk metal",
            "Handle sharp metal filings with care",
            "Follow standard industrial workshop safety rules",
            "Avoid contact with hydrofluoric acid chemicals",
            "Wear gloves when handling heavy parts",
            "Store in an organized dry place"
        ] 
    },
    41: { 
        level: "LOW RISK", status: "Stable Metal", isSafe: true, 
        advices: [
            "Non-reactive metal, safe for handling",
            "Superconductive properties at very low temperatures",
            "Very low toxicity for laboratory users",
            "Highly resistant to most chemical corrosion",
            "Avoid inhaling fine niobium metal dust",
            "Store at standard room temperature conditions"
        ],
        locations: ["High-Tech Lab", "Superconductor Lab", "Particle Accelerator", "Research Hub"],
        precautions: [
            "Follow all standard laboratory safety protocols",
            "Avoid any inhalation of metal dust",
            "Handle only with clean dry tools",
            "Store at standard room temperature conditions",
            "Wear protective gloves for general handling",
            "Keep storage area clean and organized"
        ] 
    },
    42: { 
        level: "LOW RISK", status: "Stable Metal", isSafe: true, 
        advices: [
            "Extremely high melting point for industry",
            "Non-toxic solid in its natural form",
            "Essential nutrient in very trace amounts",
            "Stable and non-reactive in air",
            "Avoid inhalation of high-temperature fumes",
            "Wear heat-resistant gloves during processing"
        ],
        locations: ["Steel Mill", "Aerospace Lab", "Laboratory", "Foundry"],
        precautions: [
            "Avoid inhalation of high temperature fumes",
            "Wear heat-resistant gloves during processing work",
            "Follow all standard workshop hygiene rules",
            "Keep work area clean of debris",
            "Wear eye protection during foundry work",
            "Handle heavy parts with proper equipment"
        ] 
    },
    43: { 
        level: "HIGH RISK", status: "Radioactive", isSafe: false, 
        advices: [
            "Synthetic element, emits Beta radiation particles",
            "Strict laboratory controls are legally required",
            "Requires specialized radioactive disposal methods",
            "Lead shielding is mandatory for protection",
            "Use Geiger counters for constant monitoring",
            "Always track radiation badges during work"
        ],
        locations: ["Nuclear Medicine Dept", "Radiation Lab", "Isotope Facility", "Sealed Bunker"],
        precautions: [
            "Lead shielding is strictly required",
            "Use Geiger counters for constant monitoring",
            "Always track radiation badges during work",
            "Limit exposure time to absolute minimum",
            "Follow all nuclear and legal protocols",
            "Wear full protective gear in lab"
        ] 
    },
    44: { 
        level: "LOW RISK", status: "Noble Metal", isSafe: true, 
        advices: [
            "Highly unreactive and very stable metal",
            "Non-toxic solid in all standard forms",
            "Extremely resistant to any chemical corrosion",
            "Hard and brittle, handle with care",
            "Wear glasses to avoid brittle chips",
            "Store in a secure laboratory area"
        ],
        locations: ["Precious Metal Lab", "Industrial Factory", "Laboratory", "Mining Center"],
        precautions: [
            "No special chemical hazards for users",
            "Wear safety glasses for brittle chips",
            "Follow standard laboratory hygiene rules",
            "Store in a secure locked area",
            "Use proper tools for precious metals",
            "Keep work area clean and organized"
        ] 
    },
    45: { 
        level: "LOW RISK", status: "Noble Metal", isSafe: true, 
        advices: [
            "Highly stable and non-reactive precious metal",
            "Non-toxic in bulk solid mass form",
            "Rare material with excellent catalytic properties",
            "Handle only with soft safety tools",
            "Avoid using any abrasive cleaning methods",
            "Maintain proper air filtration in labs"
        ],
        locations: ["Automotive Lab", "Jewelry Center", "Clean Lab", "Refining Room"],
        precautions: [
            "Handle only with soft clean tools",
            "Avoid using abrasive metal cleaning methods",
            "Follow all standard laboratory safety rules",
            "Maintain proper air filtration in lab",
            "Store in a safe dry place",
            "Wear gloves for material handling work"
        ] 
    },
    46: { 
        level: "LOW RISK", status: "Stable Metal", isSafe: true, 
        advices: [
            "Absorbs large amounts of hydrogen gas",
            "Non-toxic solid precious metal material",
            "Completely non-reactive in normal air",
            "Keep away from all sulfur compounds",
            "Avoid exposing metal to excessive heat",
            "Recycle all metal scrap for value"
        ],
        locations: ["Hydrogen Power Plant", "Electronics Factory", "Jewelry Shop", "Lab"],
        precautions: [
            "Keep away from harmful sulfur compounds",
            "Avoid exposing metal to excessive heat",
            "Follow standard precious metal care rules",
            "Recycle all metal scrap for value",
            "Handle with clean gloves for purity",
            "Store in a dry secure cabinet"
        ] 
    },
    47: { 
        level: "LOW RISK", status: "Safe Precious Metal", isSafe: true, 
        advices: [
            "Natural antibacterial properties on its surface",
            "Non-toxic and safe for skin contact",
            "Highly conductive for electricity and heat",
            "Safe to wear as jewelry daily",
            "Protect from tarnishing in moist air",
            "Avoid contact with strong nitric acid"
        ],
        locations: ["Home", "Jewelry Store", "Medical Clinic", "Electronics Lab"],
        precautions: [
            "Protect from tarnishing in moist air",
            "Follow standard daily hygiene cleaning rules",
            "Avoid any contact with nitric acid",
            "Clean surfaces only with soft cloths",
            "Store in a dry organized place",
            "Use specialized tools for jewelry work"
        ] 
    },
    48: { 
        level: "HIGH RISK", status: "Toxic Metal", isSafe: false, 
        advices: [
            "Highly toxic dust, do not inhale",
            "Significant risk of kidney damage if exposed",
            "Potentially carcinogenic to the human body",
            "Dangerous environmental pollutant, handle carefully",
            "Use P100 respirators for full protection",
            "Wear disposable coveralls during industrial work"
        ],
        locations: ["Battery Recycling", "Toxic Metal Lab", "Waste Treatment", "Controlled Plant"],
        precautions: [
            "Use P100 respirators for full safety",
            "Wear disposable coveralls during industrial work",
            "Mandatory hand washing before leaving area",
            "Follow strict hazardous waste management rules",
            "Monitor area with toxic dust sensors",
            "Work only in certified safety booths"
        ] 
    },
    49: { 
        level: "MEDIUM RISK", status: "Stable Metal", isSafe: false, 
        advices: [
            "Mildly toxic dust if inhaled deeply",
            "Very soft metal, handle with care",
            "Stable in both air and water",
            "Avoid direct skin contact with powder",
            "Always wash hands after handling metal",
            "Use only in controlled laboratory areas"
        ],
        locations: ["Display Tech Lab", "Semiconductor Plant", "Electronics Lab", "Material Test Room"],
        precautions: [
            "Avoid direct skin contact with powder",
            "Do not inhale fine metal dust",
            "Wash hands thoroughly after handling metal",
            "Use in controlled industrial laboratory areas",
            "Wear safety goggles for eye protection",
            "Store in a cool dry place"
        ] 
    },
    50: { 
        level: "LOW RISK", status: "Safe Metal", isSafe: true, 
        advices: [
            "Non-toxic and safe for food containers",
            "Highly resistant to most chemical corrosion",
            "Stable and very safe to handle",
            "No specific hazards for general users",
            "Stable solid at standard room temperature",
            "Recycle metal scrap for environmental protection"
        ],
        locations: ["Home", "Canning Factory", "Workshop", "Food Safety Lab"],
        precautions: [
            "No specific hazards for general users",
            "Stable material at room temperature conditions",
            "Follow all standard workshop safety rules",
            "Recycle scrap for environmental safety protection",
            "Store in a dry organized warehouse",
            "Handle heavy coils with proper equipment"
        ] 
    },
    51: { 
        level: "MEDIUM RISK", status: "Toxic Irritant", isSafe: false, 
        advices: [
            "Toxic if swallowed by human users",
            "Dust irritates lungs and respiratory tract",
            "Stable metalloid under normal laboratory conditions",
            "Brittle material, wear eye protection always",
            "Wear a dust mask during processing",
            "Ensure good workspace airflow at all times"
        ],
        locations: ["Metallurgy Workshop", "Flame Retardant Lab", "Industrial Facility", "Testing Bay"],
        precautions: [
            "Wear a protective dust mask always",
            "Wash skin thoroughly with soap",
            "Ensure good industrial airflow in workspace",
            "Avoid creating fine airborne dust particles",
            "Wear safety glasses for mechanical work",
            "Follow all industrial hygiene safety protocols"
        ] 
    },
    52: { 
        level: "MEDIUM RISK", status: "Toxic Metalloid", isSafe: false, 
        advices: [
            "Produces a very distinct garlic-like odor",
            "Mildly toxic if handled without protection",
            "Avoid direct inhalation of metal vapors",
            "Used safely in specialized metal alloys",
            "Protective gloves are required for handling",
            "Wash thoroughly after every work session"
        ],
        locations: ["Refining Plant", "Advanced Material Lab", "Testing Center", "Specialty Lab"],
        precautions: [
            "Monitor area for toxic metal vapors",
            "Avoid direct inhalation of metal fumes",
            "Protective gloves are strictly required now",
            "Wash thoroughly after every work session",
            "Work only in ventilated industrial booths",
            "Store in a cool dry location"
        ] 
    },
    53: { 
        level: "MEDIUM RISK", status: "Reactive Nonmetal", isSafe: false, 
        advices: [
            "Strong skin irritant, avoid direct contact",
            "Toxic in very large ingested amounts",
            "Stains skin and all surfaces purple",
            "Sublimes into vapor at room temperature",
            "Use only in well ventilated areas",
            "Store in very tight sealed containers"
        ],
        locations: ["Biology Lab", "Medical Room", "Chemistry Classroom", "Pharmacy Lab"],
        precautions: [
            "Use only in well ventilated areas",
            "Avoid staining skin with purple colors",
            "Store in very tight sealed containers",
            "Keep away from reactive metal surfaces",
            "Wear gloves and eye protection safely",
            "Avoid inhaling concentrated vapors directly"
        ] 
    },
    54: { 
        level: "LOW RISK", status: "Inert Gas", isSafe: true, 
        advices: [
            "Non-toxic and non-reactive noble gas",
            "Very heavy gas, monitor floor levels",
            "Stable and safe for medical imaging",
            "Ensure oxygen levels in small rooms",
            "Check all high pressure gas tanks",
            "Always secure cylinders in upright position"
        ],
        locations: ["Imaging Center", "Lighting Lab", "Aerospace Hub", "Specialty Lab"],
        precautions: [
            "Ensure oxygen levels are safe indoors",
            "Check all high pressure tanks regularly",
            "Follow all standard gas safety rules",
            "Secure gas cylinders in upright position",
            "Monitor valves for potential gas leaks",
            "Store in cool dry warehouse area"
        ] 
    },
    55: { 
        level: "HIGH RISK", status: "Extremely Reactive", isSafe: false, 
        advices: [
            "Explodes violently upon contact with water",
            "Liquid metal near standard room temperature",
            "Causes immediate and severe skin burns",
            "Store strictly in sealed glass ampoules",
            "Handle only in specialized glove boxes",
            "Remote handling is required for safety"
        ],
        locations: ["Atomic Clock Lab", "Vacuum Sealed Lab", "Physics Institute", "Deep Storage"],
        precautions: [
            "Handle only in specialized glove boxes",
            "Remote handling is strictly required now",
            "Avoid thermal shock to glass containers",
            "Use triple-containment storage for safety",
            "Zero moisture is allowed in workplace",
            "Wear a full face shield always"
        ] 
    },
    56: { 
        level: "MEDIUM RISK", status: "Reactive Metal", isSafe: false, 
        advices: [
            "Oxidizes very rapidly in moist air",
            "Toxic if dissolved in drinking water",
            "Reacts with water to form hydrogen",
            "Store strictly under protective mineral oil",
            "Wear eye protection during all handling",
            "Handle only with dry metal tools"
        ],
        locations: ["Petroleum Lab", "X-Ray Dept", "Chemical Supply", "Drilling Site"],
        precautions: [
            "Keep away from all water sources",
            "Store strictly under protective mineral oil",
            "Wear eye protection during handling work",
            "Handle only with dry clean tools",
            "Avoid any direct skin contact metal",
            "Follow all standard chemical storage rules"
        ] 
    },
    57: { 
        level: "MEDIUM RISK", status: "Rare Earth", isSafe: false, 
        advices: [
            "Fine metal dust is highly flammable",
            "Strong irritant to skin and eyes",
            "Reactive with water and environmental moisture",
            "Avoid any sparks or heat sources",
            "Wear safety goggles during all work",
            "Store in a very dry place"
        ],
        locations: ["Optics Lab", "Rare Earth Facility", "Glass Workshop", "Research Lab"],
        precautions: [
            "Avoid all dust sparks and heat",
            "Wear safety goggles for work sessions",
            "Wash hands thoroughly after handling metal",
            "Store in a dry cool place",
            "Avoid inhaling fine airborne metal dust",
            "Maintain a clean organized work area"
        ] 
    },
    58: { 
        level: "MEDIUM RISK", status: "Reactive Metal", isSafe: false, 
        advices: [
            "Pyrophoric dust, ignites in open air",
            "Oxidizes very quickly when exposed air",
            "Low toxicity in bulk solid form",
            "Keep dust away from all air",
            "Avoid moisture during storage and use",
            "Store in a very cool area"
        ],
        locations: ["Catalyst Lab", "Automotive Center", "Safe Testing Field", "Industrial Workshop"],
        precautions: [
            "Keep dust away from open air",
            "Follow standard industrial tool safety rules",
            "Avoid moisture during storage and use",
            "Store in a very cool area",
            "Handle only with dry clean tools",
            "Wear flame-retardant safety gear for work"
        ] 
    },
    59: { 
        level: "MEDIUM RISK", status: "Rare Earth", isSafe: false, 
        advices: [
            "Fine dust is highly flammable material",
            "Very sensitive to open air exposure",
            "Irritant to lungs if dust inhaled",
            "Soft metal, handle with care always",
            "Avoid all sparks and high heat",
            "Keep storage containers tightly closed"
        ],
        locations: ["Magnet Factory", "Metallurgy Lab", "Specialty Glass Lab", "Advanced Material Hub"],
        precautions: [
            "Avoid all sparks and heat sources",
            "Follow all standard laboratory safety rules",
            "Use protective gloves for material handling",
            "Keep storage containers tightly closed now",
            "Wash hands thoroughly after work sessions",
            "Avoid inhaling fine metallic dust particles"
        ] 
    },
    60: { 
        level: "MEDIUM RISK", status: "Stable / Irritant", isSafe: false, 
        advices: [
            "Distinct magnetic properties in solid form",
            "Oxidizes slowly when exposed to air",
            "Avoid inhaling fine metallic dust particles",
            "Stable solid in bulk mass form",
            "Wear safety glasses during mechanical work",
            "Keep away from extreme heat sources"
        ],
        locations: ["Magnet Lab", "Clean Room", "Manufacturing Hub", "Electronics Test Bay"],
        precautions: [
            "Avoid inhaling fine metallic dust particles",
            "Wear safety glasses for mechanical work",
            "Wash hands thoroughly after handling magnets",
            "Keep away from extreme heat sources",
            "Follow specialized magnet handling safety protocols",
            "Maintain a clean organized workspace daily"
        ] 
    }
};
