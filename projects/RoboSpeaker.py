import os

if __name__=='__main__':
    print("Welcome to Robospeaker. Created by Anjali")
    while True:
       x=input("Enter what you want me to speak:")
       if x=="z":
           os.system("Say bye bye friend.")
           break
       command= f"engine.say {x}"
       os.system(command)