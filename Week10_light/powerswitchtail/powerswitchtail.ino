// control power
const int powerPin = A0;
const int ledPin = 13;

void setup() {
  //initiate serial communication:
  Serial.begin(9600);
  Serial.println(F("starting up"));

  pinMode(ledPin, OUTPUT);
  pinMode(powerPin, OUTPUT);

  digitalWrite(ledPin, LOW);
  digitalWrite(powerPin, HIGH);
}  

void loop() {

      //When powerPin, A0 is low the lamp is on
      digitalWrite(ledPin, HIGH);
      digitalWrite(powerPin, LOW);
      Serial.println(F("ON"));
      delay(5000);

      //When powerPin, A0 is high the lamp is off
      digitalWrite(ledPin, LOW);
      digitalWrite(powerPin, HIGH);
      Serial.println(F("OFF"));
      delay(5000);
                      
}
