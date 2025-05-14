#!/bin/bash

# Get terminal size
ROWS=$(tput lines)
COLS=$(tput cols)

START_ROW=$((ROWS / 2))
START_COL=$((COLS / 2 ))

DELAY=0.0 # Delay for animation

COLORS=(1 2 3 4 5 6)
COLOR=1
# hide cursor
tput civis
trap "tput cnorm; exit" INT

clear

while true; do
    for ((i=0; i<START_ROW - 1; i++)); do

        ROW=$((START_ROW + i))
        for ((j=-i * 2 + 2; j<i * 2; j += 2)); do
            COLUMN=$((START_COL + j))

            tput cup $ROW $COLUMN
            echo -e "=="
        done

        MOD_COLUMN=$((START_COL + i * 2))
        for ((j=-i; j<i; j++)); do
            MOD_ROW=$((START_ROW - j))
            tput cup $MOD_ROW $MOD_COLUMN
           echo -e "=="
        done

        MOD_ROW=$((START_ROW - i))
        for ((j=-i * 2; j<i * 2; j += 2)); do
            MOD_COLUMN=$((START_COL - j))

            tput cup $MOD_ROW $MOD_COLUMN
            echo -e "=="
        done

        MOD_COLUMN=$((START_COL - i * 2))
        for ((j=-i; j<i + 1; j++)); do
            MOD_ROW=$((START_ROW + j))

            tput cup $MOD_ROW $MOD_COLUMN
            echo -e "=="
        done
        
        sleep $DELAY
    done

    COLOR_INDEX=$(((COLOR + 1) % ${#COLORS[@]}))
    COLOR=${COLORS[$COLOR_INDEX]}

    tput setaf $COLOR

    tput cup $((START_ROW + HEIGHT - 1)) $START_COL
    echo "$(printf ' %.0s' $(seq 1 $LINE_LENGTH))"
done

# Restore cursor (in case trap doesn't fire)
tput cnorm
