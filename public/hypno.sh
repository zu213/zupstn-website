#!/bin/bash

ROWS=$(tput lines)
COLS=$(tput cols)
CENTER_ROW=$((ROWS / 2))
CENTER_COL=$((COLS / 2))
declare -a FRAMEBUFFER
for ((i = 0; i < ROWS * COLS; i++)); do
    FRAMEBUFFER[$i]=" "
done
tput civis
trap "tput cnorm; exit" INT

# Set a pixel at (row, col)
set_pixel() {
  local row=$1
  local col=$2
  local char=$3
  if ((row >= 0 && row < ROWS && col >= 0 && col < COLS)); then
    FRAMEBUFFER[$((row * COLS + col))]="="
    if [ "$DIRECTION" -eq 1 ] ||[ "$DIRECTION" -eq 3 ]; then
        FRAMEBUFFER[$((row * COLS + col + 1))]="="
    fi
  fi
}

# Render the framebuffer
render() {
    tput cup $CURRENT_ROW 0
    line=""
    for ((j = 0; j < COLS; j++)); do
      line+="${FRAMEBUFFER[$((CURRENT_ROW * COLS + j))]}"
    done
    echo -ne "$line"
}

# Spiral drawing into buffer

start_spiral() {
    if [ "$DIRECTION" -eq 0 ]; then
        CURRENT_COL=$((CURRENT_COL + 1))
        set_pixel $CURRENT_ROW $CURRENT_COL
        if (( CURRENT_COL - CENTER_COL >= 2 * COUNT  )); then
            set_pixel $CURRENT_ROW $((CURRENT_COL + 1))
            ((DIRECTION++))
        fi
    elif [ "$DIRECTION" -eq 1 ]; then
        CURRENT_ROW=$((CURRENT_ROW - 1))
        set_pixel $CURRENT_ROW $CURRENT_COL
        if (( CENTER_ROW - CURRENT_ROW >= COUNT )); then
            ((DIRECTION++))
        fi
    elif [ "$DIRECTION" -eq 2 ]; then
        CURRENT_COL=$((CURRENT_COL - 1))
        set_pixel $CURRENT_ROW $CURRENT_COL
        if (( CENTER_COL - CURRENT_COL >= 2 * COUNT )); then
            ((DIRECTION++))
        fi
    elif [ "$DIRECTION" -eq 3 ]; then
        CURRENT_ROW=$((CURRENT_ROW + 1))
        set_pixel $CURRENT_ROW $CURRENT_COL
        if (( CURRENT_ROW - CENTER_ROW >= COUNT )); then
            ((DIRECTION++))
        fi
    else
        COUNT=$((COUNT + 1))
        CURRENT_ROW=$((CURRENT_ROW + 1))
        if (( COUNT > CENTER_ROW )); then
            COUNT=0
            CURRENT_ROW=$CENTER_ROW
        fi
        set_pixel $CURRENT_ROW $CURRENT_COL
        DIRECTION=0
    fi
}

# Main loop
tput civis
trap "tput cnorm; exit" INT

CURRENT_ROW=$CENTER_ROW
CURRENT_COL=$CENTER_COL
DIRECTION=0
COUNT=1
COLOURS=(1 2 3)

while true; do
    start_spiral
    render
done

tput cnorm

