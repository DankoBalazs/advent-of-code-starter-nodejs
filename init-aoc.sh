# ------ Check params ------
while getopts y:d: flag
do
    case "${flag}" in
        y) year=${OPTARG};;
        d) day=${OPTARG};;
        *) ;;
    esac
done
echo "Year: $year";
echo "Day: $day";

if [[ -z "$year" || -z "$day" ]]; then
    echo "You need to provide all parameters"
    echo "Example:  ./init-aoc.sh -y 2022 -d 1"
    exit 1;
fi

token=$(cat token.txt)

# ------ Create directories ------
mkdir "./src/$year";
mkdir "./src/$year/$day";

# shellcheck disable=SC2164
cd  "./src/$year/$day"

# ------ Download input ------
if [ ! -e ./input.txt ]; then
    curl --request GET -sL \
         --url "https://adventofcode.com/$year/day/$day/input"\
         --output './input.txt' \
         --cookie "session=$token"
else
  echo "input already exists"
fi

# ------ Add solution1 ------

if [ -e "./solution1.ts" ];
  then
    echo "Solution for $year/$day already exists"
  else
    cp "../../.././template/solution-starter.txt" "./solution1.ts"

    sed -i "s/{{year}}/const year = $year;/" ./solution1.ts
    sed -i "s/{{day}}/const day = $day;/" ./solution1.ts
    sed -i "s/{{solutionNumber}}/const solutionNumber = 1;/" ./solution1.ts
fi


# ------ Add solution2 ------

if [ -e "./solution2.ts" ];
  then
    echo "Solution for $year/$day already exists"
  else
    cp "../../.././template/solution-starter.txt" "./solution2.ts"

    sed -i "s/{{year}}/const year = $year;/" ./solution2.ts
    sed -i "s/{{day}}/const day = $day;/" ./solution2.ts
    sed -i "s/{{solutionNumber}}/const solutionNumber = 2;/" ./solution2.ts
fi

npm run start "src/$year/$day/solution1.ts"