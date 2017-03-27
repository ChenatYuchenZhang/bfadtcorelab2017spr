# Tutorial for Neopixel

### This is for 5V Digital RGB LED stripes

There are two basic kinds of LED strips, the "analog" kind and "digital" kind. Analog-type strips have all the LEDs connected in parallel and so it acts like one huge tri-color LED; you can set the entire strip to any color you want, but you can't control the individual LED's colors. They are very very easy to use and fairly inexpensive.

The Digital-type strips work in a different way. They have a chip for each LED, to use the strip you have to send digitally coded data to the chips. However, this means you can control each LED individually! Because of the extra complexity of the chip, they are more expensive.

### Wiring

- Power (red wire) from LED strip to Power on  Arduino 5V
- Ground (white or black wire) from LED strip to ground
- Signal (colored wire) from LED strip to Arduino PWM digital pin 6

### Technical Examples

1. [Addressable RGB LED Music and Sound Visualizer](https://learn.sparkfun.com/tutorials/addressable-rgb-led-music-and-sound-visualizer?_ga=1.19814203.2032224429.1485120996)
2. [Holiday Lights Hookup Guide](https://learn.sparkfun.com/tutorials/holiday-lights-hookup-guide?_ga=1.190232488.2032224429.1485120996)


### Further Reading

- [PWM Pins](https://www.arduino.cc/en/Tutorial/PWM)
- [Analog LED strip](https://learn.adafruit.com/rgb-led-strips/wiring)
- [Adafruit Neopixel](https://learn.adafruit.com/adafruit-neopixel-uberguide/overview)
- [Best Practise for Neopix mhel](https://learn.adafruit.com/adafruit-neopixel-uberguide/best-practices)
