#!/bin/bash

# Get terminal size
ROWS=$(tput lines)
COLS=$(tput cols)

# Calculate center position
START_ROW=$((ROWS / 2))
START_COL=$((COLS / 2 ))

# Animation settings
# How many lines to move downward each cycle
DELAY=0.0

COLORS=(1 2 3 4 5 6)
COLOR=1
# Hide cursor
tput civis

# Trap Ctrl+C to restore cursor
trap "tput cnorm; exit" INT

clear

while true; do
    for ((i=0; i<START_ROW - 1; i++)); do

        ROW=$((START_ROW + i))
        for ((j=-i; j<i; j += 2)); do
            COLUMN=$((START_COL + j))

            tput cup $ROW $COLUMN
            echo -e "=="
        done

        MOD_COLUMN=$((START_COL + i))
        for ((j=-i; j<i; j++)); do
            MOD_ROW=$((START_ROW - j))
            tput cup $MOD_ROW $MOD_COLUMN
           echo -e "="
        done

        MOD_ROW=$((START_ROW - i))
        for ((j=-i + 1; j<i; j += 2)); do
            MOD_COLUMN=$((START_COL - j))

            tput cup $MOD_ROW $MOD_COLUMN
            echo -e "=="
        done

        MOD_COLUMN=$((START_COL - i))
        for ((j=-i; j<i; j++)); do
            MOD_ROW=$((START_ROW + j))

            tput cup $MOD_ROW $MOD_COLUMN
            echo -e "="
        done
        
        # Clear the previous line
        #if (( i > 0 )); then
        #    tput cup $((ROW - 1)) $START_COL
        #    echo "$(printf ' %.0s' $(seq 1 $LINE_LENGTH))"
        #fi
        
        sleep $DELAY
    done

    COLOR_INDEX=$(((COLOR + 1) % ${#COLORS[@]}))
    COLOR=${COLORS[$COLOR_INDEX]}

    tput setaf $COLOR

    # Optional: reset to start
    tput cup $((START_ROW + HEIGHT - 1)) $START_COL
    echo "$(printf ' %.0s' $(seq 1 $LINE_LENGTH))"
done

# Restore cursor (in case trap doesn't fire)
tput cnorm
