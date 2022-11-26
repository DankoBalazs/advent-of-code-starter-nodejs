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

if [ -e "./solution1.ts" ]; then
    echo "Solution for $year/$day already exists"
    exit 1;
fi

cp "../../.././template/solution-starter.ts" "./solution1.ts"

sed -i "s/const year = -1;/const year = $year;/" ./solution1.ts
sed -i "s/const day = -1;/const day = $day;/" ./solution1.ts
sed -i "s/const solutionNumber = -1;/const solutionNumber = 1;/" ./solution1.ts

# ------ Add solution2 ------

if [ -e "./solution2.ts" ]; then
    echo "Solution for $year/$day already exists"
    exit 1;
fi

cp "../../.././template/solution-starter.ts" "./solution2.ts"

sed -i "s/const year = -1;/const year = $year;/" ./solution2.ts
sed -i "s/const day = -1;/const day = $day;/" ./solution2.ts
sed -i "s/const solutionNumber = -1;/const solutionNumber = 2;/" ./solution2.ts