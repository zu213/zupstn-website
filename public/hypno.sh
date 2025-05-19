#!/bin/bash

ROWS=$(tput lines)
COLS=$(tput cols)
CENTER_ROW=$((ROWS / 2))
CENTER_COL=$((COLS / 2))
stty -echo
trap "stty echo; tput cnorm; exit" INT
tput reset
tput civis

render() {
    for ((k = 0; k < 5; k++)); do
        row=${CURRENT_ROWS[$k]}
        col=${CURRENT_COLS[$k]}
        color=${COLOURS[$k]}
        
        # ANSI: print for spped
        printf "\033[%s;%sH\033[3%sm==\033[0m" "$row" "$col" "$color"
    done
}

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
            CURRENT_COLS[$spiral]=$CENTER_COL
        fi
        DIRECTIONS[$spiral]=0
    fi

}

CURRENT_ROWS=($((CENTER_ROW)) $((CENTER_ROW + 5)) $((CENTER_ROW + 8))  $((CENTER_ROW + 10))  $((CENTER_ROW + 11)))
CURRENT_COLS=($CENTER_COL $((CENTER_COL)) $((CENTER_COL)) $((CENTER_COL)) $((CENTER_COL)))
DIRECTIONS=(0 0 0 0 0)
COUNTS=(0 5 8 10 11)
COLOURS=(1 2 3 4 5)

while true; do
    animate_spiral 0
    animate_spiral 1
    animate_spiral 2
    animate_spiral 3
    animate_spiral 4

    render
    sleep 0.01
done

tput cnorm

