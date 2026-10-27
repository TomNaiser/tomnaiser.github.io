export const diagrams = {
  workflow: {
    title:{de:'Vom ausgerichteten Stativ zum fertigen Panorama',en:'From a level tripod to a finished panorama'},
    caption:{de:'Die entscheidenden Kontrollen liegen vor der Bildserie. Entwicklung und Stitching bauen auf einer sauberen Aufnahme auf.',en:'The essential checks happen before the image sequence. RAW processing and stitching build on a sound capture.'},
    de:`flowchart TB
      subgraph A["01 · VOR DER BILDSERIE"]
      direction LR
      L["Stativ & Kopf ausrichten<br/>Libelle · Kameraneigung prüfen"] --> C["Kamera einstellen<br/>Blende · kurze Zeit · ISO · Fokus-Lock"] --> T["Testbilder & Raster prüfen<br/>Sensorstaub · Schärfe · Überlappung"]
      end
      subgraph B["02 · AUFNEHMEN UND VERARBEITEN"]
      direction LR
      P["Bildserie aufnehmen<br/>ausschwingen · feste Belichtung"] --> R["RAW entwickeln<br/>PhotoLab 9 · DeepPRIME · 16-Bit-TIFF"] --> G["PTGui Pro<br/>Raster · Vignettierung · Stitching"]
      end
      subgraph D["03 · FERTIGSTELLEN UND ZEIGEN"]
      direction LR
      Q["Panorama kontrollieren<br/>Masken · Horizont · Übergänge"] --> V["Multires-Kacheln erzeugen<br/>krpano · passende Kachelgröße"] --> K["Veröffentlichen & prüfen<br/>AWS · Zoom · Nachladen"]
      end
      A --> B --> D`,
    en:`flowchart TB
      subgraph A["01 · BEFORE THE IMAGE SEQUENCE"]
      direction LR
      L["Level tripod & head<br/>bubble level · check camera tilt"] --> C["Set the camera<br/>aperture · short exposure · ISO · focus lock"] --> T["Check test images & grid<br/>sensor dust · sharpness · overlap"]
      end
      subgraph B["02 · CAPTURE AND PROCESS"]
      direction LR
      P["Capture the sequence<br/>settle · fixed exposure"] --> R["Develop the RAW files<br/>PhotoLab 9 · DeepPRIME · 16-bit TIFF"] --> G["PTGui Pro<br/>grid · vignetting · stitching"]
      end
      subgraph D["03 · FINISH AND SHARE"]
      direction LR
      Q["Check the panorama<br/>masks · horizon · transitions"] --> V["Generate multires tiles<br/>krpano · suitable tile size"] --> K["Publish & check<br/>AWS · zoom · tile loading"]
      end
      A --> B --> D`,
  },
  hardware: {
    title:{de:'Wie das Panoramasystem zusammenarbeitet',en:'How the panorama system works together'},
    caption:{de:'Ein Client plant die Aufnahme. Der Controller bewegt den Kopf und löst die Kamera aus. Fotos und Positionsdaten gelangen getrennt zum Stitching-Rechner.',en:'One client plans the capture. The controller moves the head and triggers the camera. Photographs and position records reach the stitching computer separately.'},
    de:`flowchart TB
      A["Android ODER Windows<br/>Planung & Bedienung"] <-->|Bluetooth| B["Arduino Nano R4 · Firmware<br/>Plan ausführen · Position regeln"]
      B <-->|"Istwinkel · I²C"| E["AS5048B-Winkelgeber<br/>Pan & Tilt"]
      B -->|Motortreiber| M["Pan-/Tilt-Mechanik<br/>Kamera positionieren"]
      B -->|Auslösekabel| C["Kamera<br/>aktuell Sony A7R V"]
      M -.->|trägt und bewegt| C
      C -->|RAW-Bilddateien| PC["Bearbeitungsrechner<br/>RAW-Entwicklung & PTGui"]
      A -->|Papywizard-XML| PC`,
    en:`flowchart TB
      A["Android OR Windows<br/>planning & operation"] <-->|Bluetooth| B["Arduino Nano R4 · firmware<br/>execute plan · control position"]
      B <-->|"measured angles · I²C"| E["AS5048B encoders<br/>pan & tilt"]
      B -->|motor drivers| M["Pan/tilt mechanism<br/>position the camera"]
      B -->|shutter cable| C["Camera<br/>currently Sony A7R V"]
      M -.->|carries and moves| C
      C -->|RAW image files| PC["Processing computer<br/>RAW development & PTGui"]
      A -->|Papywizard XML| PC`,
  },
  software: {
    title:{de:'Firmware, Android und Windows',en:'Firmware, Android and Windows'},
    caption:{de:'Beide Apps speichern Aufnahmeläufe lokal, bereiten Restaufträge vor und schreiben vollständige XML-Zwischenstände. Ihre Archive werden nicht automatisch synchronisiert. Die Fotos bleiben auf der Kamera.',en:'Both apps archive captures locally, prepare continuation jobs and write complete XML snapshots. Archives are not automatically synchronised. Photographs remain on the camera.'},
    de:`flowchart TB
      subgraph CLIENTS["EIN CLIENT ZUR ZEIT"]
      direction LR
      A["Android-App<br/>Planung · Bedienung"]
      W["Windows-Client<br/>Planung · Bedienung"]
      end
      CLIENTS <-->|"Bluetooth · Plan / Status / Istwinkel"| F["Arduino-Firmware<br/>Bewegung · Beruhigung · Auslösung"]
      A --> S["Android-Archiv · SQLite<br/>lokal auf dem Smartphone"]
      W --> J["Windows-Archiv · SQLite<br/>lokal auf dem Rechner"]
      S --> R["Unterbrechung<br/>Gerätestand prüfen · Restauftrag vorbereiten"]
      J --> R
      R --> L["Plan laden und bestätigen<br/>Fortsetzung ausdrücklich starten"]
      L -.-> F
      S --> X["Vollständige XML-Sicherung · CSV<br/>Positionsdaten an PTGui übergeben"]
      J --> X`,
    en:`flowchart TB
      subgraph CLIENTS["ONE CLIENT AT A TIME"]
      direction LR
      A["Android app<br/>planning · operation"]
      W["Windows client<br/>planning · operation"]
      end
      CLIENTS <-->|"Bluetooth · plan / status / measured angles"| F["Arduino firmware<br/>movement · settling · triggering"]
      A --> S["Android archive · SQLite<br/>local to the phone"]
      W --> J["Windows archive · SQLite<br/>local to the computer"]
      S --> R["Interruption<br/>check head · prepare continuation"]
      J --> R
      R --> L["Load and confirm plan<br/>explicitly start continuation"]
      L -.-> F
      S --> X["Complete XML backup · CSV<br/>pass positions to PTGui"]
      J --> X`,
  },
  history: {
    title:{de:'Vom ersten Panorama zum heutigen System',en:'From the first panorama to the current system'},
    caption:{de:'Jeder Aufbau löste andere Probleme: von der ersten Automatisierung über geringeres Gewicht und gemessene Achswinkel bis zur gemeinsamen Entwicklung von Elektronik und Software.',en:'Each build addressed different problems: initial automation, lower weight, measured axis angles, and the joint development of electronics and software.'},
    de:`flowchart TB
      A["2003 · erste Digitalkamera<br/>Panoramen von Hand"] --> B["2008 · RC-Servos & C-Control<br/>Automatisierung, noch wenig stabil"]
      B --> C["Orion/Merlin und Schrittmotorversuche<br/>Stabilität, Gewicht und Strombedarf abwägen"]
      C --> D["PanoDuino Nummer 1<br/>Arduino Mega · Pololu Maestro · CHDK"]
      D --> E["Absolute Winkelgeber & PID<br/>Istpositionen auch fürs Stitching"]
      E --> F["2019 · PanoBoard V4<br/>Elektronik auf eigener Platine"]
      F --> G["Heutige Entwicklung<br/>PanoBoard V5 · Arduino Nano R4<br/>Android & Windows · aktuelle Kamera A7R V"]`,
    en:`flowchart TB
      A["2003 · first digital camera<br/>handheld panoramas"] --> B["2008 · RC servos & C-Control<br/>automation, limited mechanical stability"]
      B --> C["Orion/Merlin and stepper experiments<br/>balance stability, weight and power"]
      C --> D["PanoDuino number 1<br/>Arduino Mega · Pololu Maestro · CHDK"]
      D --> E["Absolute encoders & PID<br/>measured positions also aid stitching"]
      E --> F["2019 · PanoBoard V4<br/>electronics on a custom PCB"]
      F --> G["Current development<br/>PanoBoard V5 · Arduino Nano R4<br/>Android & Windows · current camera A7R V"]`,
  },
};
