while getopts y:d:t: flag
do
    case "${flag}" in
        y) year=${OPTARG};;
        d) day=${OPTARG};;
        t) token=${OPTARG};;
        *) ;;
    esac
done
echo "Year: $year";
echo "Day: $day";
echo "Token: $token";

if [[ -z "$year" || -z "$day" || -z "$token" ]]; then
    echo "You need to provide all parameters"
    echo "Example:  ./init-aoc.sh -y 2022 -d 1 -t your-token"
    exit 1;
fi


mkdir "./src/$year";
mkdir "./src/$year/$day";

# shellcheck disable=SC2164
cd  "./src/$year/$day"

if [ ! -e ./input.txt ]; then
    curl --request GET -sL \
         --url "https://adventofcode.com/$year/day/$day/input"\
         --output './input.txt' \
         --cookie "session=$token"
else
  echo "input already exists"
fi

if [ -e "./solution.ts" ]; then
    echo "Solution for $year/$day already exists"
    exit 1;
fi

cp "../../.././template/solution-starter.ts" "./solution.ts"

sed -i "s/let year = -1;/let year = $year;/" ./solution1.ts
sed -i "s/let day = -1;/let day = $day;/" ./solution1.ts
