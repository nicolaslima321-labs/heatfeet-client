# HeatFeet App (heatfeet)

HeatFeet Client Application, is the front-end strage of HeatFeet project, that's our semerstal project in computer engineer. The objective of this project is drawn a heatmap of the foot  "steps" of a person, in order to analyze the same, and see the regions where the "stepped" are more intense. The project idea is share this resource with orthopedists, physiotherapists or health professionals in general and then, assist in obtaining diagnoses of possible diseases that may be caused by the way the person steps.

The application is beeing developed with JavaScript, VueJS and QuasarJS, software will have the data provided from an electronic platform with an Arduino microcontroller, thus collecting, with sensors, the stride steps, as well as the force exerted on those strands. The result is something like that:

![Main Panel](https://raw.githubusercontent.com/nicolaslima321/heatfeet-client/master/HeatFeet%20Main%20Panel.jpeg "HeatFeet Main Panel")

To install the project, you must follow these steps:

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
