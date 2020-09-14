# Cisco CodecPlus ATEM connect
Connect ATEM Mini switcher to Cisco Codec Plus

Snapshot of my setup to connect an ATEM Mini Pro to a Cisco Codec Plus

Components:

ATEM Settings
ATEM Software Control settings Export (excluding Youtube keys), this has a couple of Macros in there for PIP control

Bitfocus Companion
Full configuration export, originally this app works with an Elgato Stream Deck, but can also be triggered by HTML call which is what the Codec Macro does.

Codec Plus
Export of the UI Extensions and Macro. The widget ID in the Mixer panel is the ID a key has in Companion, the Macro simply "presses" that key. If you have more widgets in your system or want proper error checking, there's some work left.

H2R Settings
Export of H2R settings - H2R is called by the "Lower Thirds" and "Ticker" button. Note how the "Ticker" button latches (setting in Companion).


Jan-Willem Ruys, jruys@cisco.com
