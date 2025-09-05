# import speech_recognition as sr
# import webbrowser
# import pyttsx3

recognizer = sr.Recognizer()
engine = pyttsx3.init()

def speak(text):
    engine.say(text)
    engine.runAndWait()

if __name__ == "__main__":
# speak("Initializing Jarivis......")
 speak("Hello Anjali......")
 x=input("Enter what you want me to speak:")
 speak(x)

    # # Listen for the wake word .
    #  while True:
    #   r = sr.Recognizer()

    #   print