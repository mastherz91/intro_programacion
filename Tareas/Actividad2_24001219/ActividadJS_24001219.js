
var birthday = prompt("Enter your birth day");
var birthMonth = prompt("Enter your birth month");

var parrafo = document.getElementById("myparagraph");

//signo del zodiaco

var signos_zodiaco = [
  {
    "sign": "Capricorn",
    "date_ranges": [
      {
        "start_day": 22,
        "end_day": 31,
        "start_month": 12,
        "end_month": 12
      },
      {
        "start_day": 1,
        "end_day": 19,
        "start_month": 1,
        "end_month": 1
      }
    ]
  },
  {
    "sign": "Aquarius",
    "date_ranges": [
      {
        "start_day": 20,
        "end_day": 31,
        "start_month": 1,
        "end_month": 1
      },
      {
        "start_day": 1,
        "end_day": 18,
        "start_month": 2,
        "end_month": 2
      }
    ]
  },
  {
    "sign": "Pisces",
    "date_ranges": [
      {
        "start_day": 19,
        "end_day": 28,
        "start_month": 2,
        "end_month": 2
      },
      {
        "start_day": 1,
        "end_day": 20,
        "start_month": 3,
        "end_month": 3
      }
    ]
  },
  {
    "sign": "Aries",
    "date_ranges": [
      {
        "start_day": 21,
        "end_day": 31,
        "start_month": 3,
        "end_month": 3
      },
      {
        "start_day": 1,
        "end_day": 19,
        "start_month": 4,
        "end_month": 4
      }
    ]
  },
  {
    "sign": "Taurus",
    "date_ranges": [
      {
        "start_day": 20,
        "end_day": 30,
        "start_month": 4,
        "end_month": 4
      },
      {
        "start_day": 1,
        "end_day": 20,
        "start_month": 5,
        "end_month": 5
      }
    ]
  },
  {
    "sign": "Gemini",
    "date_ranges": [
      {
        "start_day": 21,
        "end_day": 31,
        "start_month": 5,
        "end_month": 5
      },
      {
        "start_day": 1,
        "end_day": 20,
        "start_month": 6,
        "end_month": 6
      }
    ]
  },
  {
    "sign": "Cancer",
    "date_ranges": [
      {
        "start_day": 21,
        "end_day": 30,
        "start_month": 6,
        "end_month": 6
      },
      {
        "start_day": 1,
        "end_day": 22,
        "start_month": 7,
        "end_month": 7
      }
    ]
  },
  {
    "sign": "Leo",
    "date_ranges": [
      {
        "start_day": 23,
        "end_day": 31,
        "start_month": 7,
        "end_month": 7
      },
      {
        "start_day": 1,
        "end_day": 22,
        "start_month": 8,
        "end_month": 8
      }
    ]
  },
  {
    "sign": "Virgo",
    "date_ranges": [
      {
        "start_day": 23,
        "end_day": 31,
        "start_month": 8,
        "end_month": 8
      },
      {
        "start_day": 1,
        "end_day": 22,
        "start_month": 9,
        "end_month": 9
      }
    ]
  },
  {
    "sign": "Libra",
    "date_ranges": [
      {
        "start_day": 23,
        "end_day": 30,
        "start_month": 9,
        "end_month": 9
      },
      {
        "start_day": 1,
        "end_day": 22,
        "start_month": 10,
        "end_month": 10
      }
    ]
  },
  {
    "sign": "Scorpio",
    "date_ranges": [
      {
        "start_day": 23,
        "end_day": 31,
        "start_month": 10,
        "end_month": 10
      },
      {
        "start_day": 1,
        "end_day": 21,
        "start_month": 11,
        "end_month": 11
      }
    ]
  },
  {
    "sign": "Sagittarius",
    "date_ranges": [
      {
        "start_day": 22,
        "end_day": 30,
        "start_month": 11,
        "end_month": 11
      },
      {
        "start_day": 1,
        "end_day": 21,
        "start_month": 12,
        "end_month": 12
      }
    ]
  }
]

// iteración

for (var i = 0; i < signos_zodiaco.length; i++) {
  for (var j = 0; j < signos_zodiaco[i].date_ranges.length; j++) {
    var date_range = signos_zodiaco[i].date_ranges[j];
    if (date_range.start_day <= birthday && date_range.end_day >= birthday
      && date_range.start_month <= birthMonth && date_range.end_month >= birthMonth) {
      console.log("Your sign is " + signos_zodiaco[i].sign)
      var signo = signos_zodiaco[i].sign;

      break
    }
  }
}

// elementos

parrafo.innerHTML = "Tu signo zodiacal es: " + signo;

