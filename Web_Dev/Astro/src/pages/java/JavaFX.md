---
layout: ../../layouts/serious/LayoutAstro.astro
title: 'JavaFX'
metaTitle: 'JavaFX'
description: ''
author: 'Italo Corraro'
order: 22
---

Per costruire un software con un'interfaccia utente bisogna stabilire come reagire agli eventi generati dall'interazione.

*Il programma "reagisce", non opera a priori.*

Stage
Scene
UI Elements

L'applicazione estende la classe `Applictaion` ed eredita tre metodi fondamentali:
- `init` - setup
- `start` - crea GUI
- `stop` - shutdown

```java
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class EgJavFX00 extends Application {
    public void start(Stage stage) {
        stage.setTitle("Esempio ");
        stage.show();
    }
    public static void main (string[] args) {
        launch(args);
    }
}
```

In JavaFX, il compilatore aggiunge automaticamente il main di default per lanciare l'applicazione grafica con il metodo `launch`; se non si tratta di un progetto JavaFX, ma di un Java standard, è necessario inserirlo manualmente come sopra.

Lo `stage` è configurabile come un oggetto qualsiasi stamite metodi `set` (`Width`, `Height`, `X`, `Y`, `MaxWidth`, `MinWidth` ecc...).

È possibile recuperare le dimensione dello schermo con `Screen`:
```java
javafx.geometry.Rectangle2D screen = Screen.getPrimary().getVisualBounds(); // eg. 1920 x 1040
stage.setX(screen.getMinX() + screen.getWidth() - stage.getWidth());
/* .... */
```

```java
// dentro start:
Pane root = new Pane();
Scene scene = 
    new Scene(root, 300, 50, Color.YELLOW);
stage.setScene(scene);
stage.show();
```

La classe `Canvas` permette di disegnare dentro un pannello.

```java
/* Un FlowPane dispone automaticamente
 * i suoi componenti da sinistra verso destra 
 * e dall'alto verso il basso */
FlowPane panel = new FlowPane(); 
panel.setPrefSize(200,130);
Canvas canvas = new Canvas(150,130);
// al pannello vanno associati dei componenti:
panel.getChildren().add(canvas);

GraphicContext g = canvas.getGraphicContext2D();

g.setFont(Font.font("Serif", FontWeight.BOLD, 20));
g.setFill(Color.RED); g.fillRect(20,20, 100,80);
/* ... */
Scene scene = new Scene(panel);
stage.setScene(scene);
stage.show();
```

Java offre due stylesheet di default che possono essere caricati:

```java
setUserAgentStylesheet(STYLESHEET_MODENA);
setUserAgentStylesheet(STYLESHEET_CASPIAN);
```

## Layout Panes

FlowPane
HBox
BorderPane
GridPane
VBox

## Controlli

`javafx.scene.control`

<!--  -->

ImageView