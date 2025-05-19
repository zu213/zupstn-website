#!/bin/bash

ROWS=$(tput lines)
COLS=$(tput cols)
CENTER_ROW=$((ROWS / 2))
CENTER_COL=$((COLS / 2))
tput civis
trap "tput cnorm; exit" INT


render() {
    for ((k = 0; k < 3; k++)); do
        row=${CURRENT_ROWS[$k]}
        col=${CURRENT_COLS[$k]}
        color=${COLOURS[$k]}
        
        # ANSI: \033[row;colH moves cursor, \033[3Xm sets color
        printf "\033[%s;%sH\033[3%sm==\033[0m" "$row" "$col" "$color"
    done
}

# Spiral drawing into buffer

animate_spiral() {
    local spiral=$1
    local count=${COUNTS[$spiral]}
    local direction=${DIRECTIONS[$spiral]}

    if [ "$direction" -eq 0 ]; then
        ((CURRENT_COLS[$spiral]+=2))
        if (( CURRENT_COLS[$spiral] - CENTER_COL >= 2 * count  )); then
            ((DIRECTIONS[$spiral]++))
        fi
    elif [ "$direction" -eq 1 ]; then
        ((CURRENT_ROWS[$spiral]--))
        if (( CENTER_ROW - CURRENT_ROWS[$spiral] >= count )); then
            ((DIRECTIONS[$spiral]++))
        fi
    elif [ "$direction" -eq 2 ]; then
        ((CURRENT_COLS[$spiral]-=2))
        if (( CENTER_COL - CURRENT_COLS[$spiral] >= 2 * count )); then
            ((DIRECTIONS[$spiral]++))
        fi
    elif [ "$direction" -eq 3 ]; then
        ((CURRENT_ROWS[$spiral]++))
        if (( CURRENT_ROWS[$spiral] - CENTER_ROW >= count )); then
            ((DIRECTIONS[$spiral]++))
        fi
    else
        COUNTS[$spiral]=$((count + 1))
        ((CURRENT_ROWS[$spiral]++))
        if (( CURRENT_ROWS[spiral] > ROWS )); then
            COUNTS[$spiral]=0
            CURRENT_ROWS[$spiral]=$CENTER_ROW
        fi
        DIRECTIONS[$spiral]=0
    fi

}

# Main loop
tput civis
trap "tput cnorm; exit" INT

CURRENT_ROWS=($((CENTER_ROW)) $((CENTER_ROW + 2)) $((CENTER_ROW + 5)))
CURRENT_COLS=($CENTER_COL $CENTER_COL $CENTER_COL)
DIRECTIONS=(0 0 0)
COUNTS=(0 2 5)
COLOURS=(1 2 3)

while true; do
    animate_spiral 0
    animate_spiral 1
    animate_spiral 2
    
    render
    sleep 0.01
done

tput cnorm

