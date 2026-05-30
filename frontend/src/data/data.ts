import type { Media, WatchingMedia } from "@/types";

export const mediaList: Media[] = [
  {
    id: "a4e8bbbfeee1dbb993a13d4bca3ef41a",
    type: "series",
    title: "Mr. Robot",
    description:
      "A group of hackers recruits a man who works as a cybersecurity engineer by day and a cyberwatcher by night to bring down a global corporation.",
    year: 2015,
    director: "Sam Esmail",
    ageRating: "+16",
    genres: ["Drama", "Thriller", "Action"],
    rating: 4.8,
    posterUrl: "https://pics.filmaffinity.com/mr_robot-978107021-large.jpg",
    bannerUrl:
      "https://imgs.search.brave.com/4KXx4ITQpVh8O2B2WZ7Xs9k08YwKHHJLYU7RMABZ2VI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzZXQuY29t/L3cvZnVsbC9lLzEv/OC8zNDMzMjYuanBns",
    cast: [
      {
        id: "282926646e8837973be7dad8eebc93fd",
        name: "Rami Malek",
        role: "Elliot Alderson",
        image:
          "https://www.tvguide.com/a/img/resize/4c5d21161253a3baecce1f25c649339202b80369/catalog/provider/2/13/2-26a724f9c730049190e7aceb2e9c8416.jpg?auto=webp&fit=crop&height=300&width=200",
      },
      {
        id: "360ff9f532aabd8384846fd54d66f47e",
        name: "Christian Slater",
        role: "Mr. Robot",
        image:
          "https://www.tvguide.com/a/img/resize/e3781bfd1fe5dc15a7131b81ec262f01be2d14f1/catalog/provider/2/13/2-bdfdd2d791269c1c3d7fa08479c55c86.jpg?auto=webp&fit=crop&height=300&width=200",
      },
      {
        id: "33adb753b61db39638e5ff592cfc4878",
        name: "Portia Doubleday",
        role: "Angela Moss",
        image:
          "https://static.wikia.nocookie.net/mrrobot/images/f/f1/Season_4_Angela_Moss.jpg/revision/latest/scale-to-width-down/250?cb=20190928214750",
      },
      {
        id: "3831142179141cf63d2f23f918863f95",
        name: "Carly Chaikin",
        role: "Darlene",
        image:
          "https://static.wikia.nocookie.net/mrrobot/images/e/e4/Season_4_Darlene.jpg/revision/latest/scale-to-width-down/250?cb=20190928213622",
      },
      {
        id: "bff1cdf75761652b77471b8f767b7c5a",
        name: "Martin Wallström",
        role: "Tyrell Wellick",
        image:
          "https://static.wikia.nocookie.net/mrrobot/images/c/c8/Season_4_Tyrell_Wellick.jpg/revision/latest/scale-to-width-down/250?cb=20190928213725",
      },
      {
        id: "89a928e33922da74c630e628af0f256f",
        name: "Stephanie Corneliussen",
        role: "Joanna Wellick",
        image:
          "https://static.wikia.nocookie.net/mrrobot/images/b/b5/S2_poster_-_Joanna_Wellick.jpg/revision/latest/scale-to-width-down/240?cb=20240303184437",
      },
      {
        id: "2c8fbdf9fa45fd00e68d9cf30c144933",
        name: "Grace Gummer",
        role: "Dominique DiPierro",
        image:
          "https://static.wikia.nocookie.net/mrrobot/images/5/54/Season_4_Dominique_DiPierro.jpg/revision/latest/scale-to-width-down/250?cb=20190928214611",
      },
      {
        id: "b6403928d45650a9450da99bc4cb39ee",
        name: "Sunita Mani",
        role: "Trenton",
        image:
          "https://static.wikia.nocookie.net/mrrobot/images/c/c7/SMani.jpg/revision/latest/scale-to-width-down/275?cb=20160602025229",
      },
      {
        id: "4f4f1e254cb1105b5d78e1016bfe6ff9",
        name: "B.D Wong",
        role: "Whiterose",
        image:
          "https://static.wikia.nocookie.net/mrrobot/images/5/5f/Season_4_Whiterose.jpg/revision/latest/scale-to-width-down/250?cb=20190928214047",
      },
      {
        id: "5741f76fc21be704b91d83e585af862b",
        name: "Michael Cristofer",
        role: "Phillip Price",
        image:
          "https://static.wikia.nocookie.net/mrrobot/images/e/e1/Season_4_Phillip_Price.jpg/revision/latest/scale-to-width-down/250?cb=20190928214408",
      },
      {
        id: "b5eee797931045c85297d54a3539da4f",
        name: "Bruce Altman",
        role: "Terry Colby",
        image:
          "https://static.wikia.nocookie.net/mrrobot/images/5/54/Terry_Colby.png/revision/latest/scale-to-width-down/250?cb=20150602173801",
      },
      {
        id: "c52f4cd63bd14725496807d22e42ae2b",
        name: "Brian Stokes Mitchell",
        role: "Scott Knowles",
        image:
          "https://static.wikia.nocookie.net/mrrobot/images/d/d2/Scott.png/revision/latest/scale-to-width-down/250?cb=20150829181743",
      },
      {
        id: "b33e1440d6b793398bbbdb9a6725d3a9",
        name: "Michelle Hicks",
        role: "Sharon Knowles",
        image:
          "https://static.wikia.nocookie.net/mrrobot/images/6/66/Sharon_Knowles.PNG/revision/latest/scale-to-width-down/250?cb=20161018012707",
      },
      {
        id: "6c7dbae46a08da8bb479cd5e062d8ea3",
        name: "Frankie Shaw",
        role: "Shayla Nico",
        image:
          "https://static.wikia.nocookie.net/mrrobot/images/6/6c/Shayla_002.jpg/revision/latest/scale-to-width-down/250?cb=20150607200006",
      },
      {
        id: "5b6b6d0926e63f87840ae74c0e5308e6",
        name: "Gloria Reuben",
        role: "Krista Gordon",
        image:
          "https://static.wikia.nocookie.net/mrrobot/images/b/b3/Krista_Gordon.jpg/revision/latest?cb=20240118015212",
      },
      {
        id: "78cc627a1cfbf7ca52c76b12c6d66fbc",
        name: "Elliot Villar",
        role: "Fernando Vera",
        image:
          "https://static.wikia.nocookie.net/mrrobot/images/9/92/Vera.jpg/revision/latest/scale-to-width-down/250?cb=20240225220620",
      },
    ],
    season: [
      {
        id: "236effcca20b66ba4d6fb260d1995bd1",
        number: 1,
        duration: 3802,
        episodes: [
          {
            id: "593c251639a80f2d5b1d22318c61a762",
            title: "eps1.0_hellofriend.mov",
            description:
              "Elliot works at Allsafe, a digital security firm, but at night he spends his time hacking into the social media and bank accounts of friends and acquaintances. He also manages to track down cybercriminals and hand them over to the police. Elliot meets Mr Robot, a hacker leading a group that plans to attack Evil Corp. by wiping all debt records from the bank. Elliot joins Mr Robot's gang.",
            thumbnail:
              "https://imgs.search.brave.com/ICZeqqLVwR_UNqLFhsvfUrpHTce_m0Y8Ul348PpQRaE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lcGlz/b2RlaGl2ZS5jb20v/X25leHQvaW1hZ2U_/dXJsPWh0dHBzOi8v/ZXBpc29kZWhpdmUu/Y29tL2ltYWdlL2xD/NkNxTDM4Nm50R3dp/NmprSkNUSFB0bnJZ/Uy5qcGcmdz0zODQw/JnE9NzU",
            duration: 45,
            season: 1,
            episode: 1,
          },
          {
            id: "5d4fa3af4b2e3974ffc4762e6476044e",
            title: "eps1.1_ones-and-zer0es.mpeg",
            description:
              "The new CEO of E-Corp offers Elliot a high-ranking position, but Elliot is becoming increasingly paranoid due to his heavy drug use. Meanwhile, Mr Robot wants Elliot to hack into a gas plant to cause an explosion and destroy a facility housing E-Corp's offline backups.",
            thumbnail:
              "https://imgs.search.brave.com/guWr-JGxD9VIMQ9mxO-maIt7tyJHEvvv7T2wrO_dlws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/d2hhdC1hcmUteW91/ci1mYXZvdXJpdGUt/bXItcm9ib3QtZXBp/c29kZXMtaWxsLXN0/YXJ0LXYwLTJiNDd0/aXZxdmdjZTEuanBl/Zz93aWR0aD02NDAm/Y3JvcD1zbWFydCZh/dXRvPXdlYnAmcz03/YzczMDY0MDEyMTUz/MjBlNWFjMWMxOTNi/N2ZhOWI5ODEyMWUz/MWVj",
            duration: 45,
            season: 1,
            episode: 1,
          },
          {
            id: "5ebf712187a4fe1e577631b9bb4df7f3",
            title: "eps1.2_d3bug.mkv",
            description:
              "Elliot is recovering in hospital after his fall. Mr Robot apologises to him, but Elliot wants nothing to do with his project. Meanwhile, Fsociety releases emails implicating Colby in a toxic waste spill several years ago that caused many people to develop leukaemia, including Elliot's father.",
            thumbnail:
              "https://imgs.search.brave.com/a2xaS2sGVllF4dXSy2hsIjIznbW3UAW8dSougfI0o4Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lcGlz/b2RlaGl2ZS5jb20v/X25leHQvaW1hZ2U_/dXJsPWh0dHBzOi8v/ZXBpc29kZWhpdmUu/Y29tL2ltYWdlL2py/UWJyclFCQVJLSENs/T0RPOGJIOGdEeEJ3/Vy5qcGcmdz0zODQw/JnE9NzU",
          },
          {
            id: "009f028e741e667349bf0f0153242abf",
            title: "eps1.3_da3m0ns.mp4",
            description:
              "Now that Elliot has returned to Fsociety, he plans to destroy E Corp’s offline backups, but rather than causing an explosion, he thinks it would be better to hack into the climate control system and raise the temperatures - though to do so, he needs to be inside the building. However, Elliot hasn’t brought his medication with him, so the team has to wait in a motel for him to come round before they can carry out the plan.",
            thumbnail:
              "https://imgs.search.brave.com/byf2Kok_htqJJ7ttX8eRozEzNWUU1t9F7zUnh5TxFqY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlptTmhNakE0/WW1RdE9XRXpaaTAw/WkRjMExXSm1PRGd0/WXpJek5EazBaV1l5/WkRnMVhrRXlYa0Zx/Y0djQC5qcGc",
          },
          {
            id: "26ff28a480f15224f3637d20c54ef615",
            title: "eps1.4_3xpl0its.wmv",
            description:
              "With the help of the fsociety crew, Elliot gains access to Steel Mountain. Things aren’t going well until he meets up with Tyrell; eventually, he manages to install the device needed to carry out the attack. Darlene learns that Dark Army has changed its mind about simultaneously attacking the backup copies in China, which puts the whole plan at risk.",
            thumbnail:
              "https://imgs.search.brave.com/k-Bu89R8hfj7wi87HKjHuTMjmwNg87569teRV4BD1Wk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk9ERTVNREF4/TlRFeU1GNUJNbDVC/YW5CblhrRnRaVGd3/TmpZNE9EQXpPVEVA/LmpwZw",
          },
          {
            id: "a46b5b2fc57628ec40c01119519e42da",
            title: "eps1.5_br4ve-trave1er.asf",
            description:
              "To save someone he cares about, Elliot has to get Vera, the drug dealer, out of prison. Tyrell's 'game' is driving him mad. Angela investigates her mother's death further.",
            thumbnail:
              "https://imgs.search.brave.com/UkB26Kogx9YNvC5GRVV1kNE_2nsgkixvbdXxSWxoyYQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk16TmlOVGt6/TjJFdFpUTTBNQzAw/WkdOaUxXSmlZbVF0/TlRJMU1qVm1OV1Ex/WXpFNFhrRXlYa0Zx/Y0djQC5qcGc",
          },
          {
            id: "1a75f2469cffa29e4f11d1421a2dcd42",
            title: "eps1.6_v1ew-s0urce.flv",
            description:
              "A month after the incidents at the prison, Elliot has completed the year of therapy ordered by the judge. Krista urges him to keep going, and a few days later he decides to take her advice and returns to confess that he is a hacker and that he has been hacking into her accounts.",
            thumbnail:
              "https://imgs.search.brave.com/YIv_MJzb3dexJvx8fXBPoJAjyueGM821O1ukLMwaEvY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb21t/dW5pdHkuc2hvdGRl/Y2suY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzEyL01y/Li1Sb2JvdC1TMUUx/XzkucG5n",
          },
          {
            id: "d27e4343038794f55bc426b65c413b0a",
            title: "eps1.7_wh1ter0se.m4v",
            description:
              "Allsafe has been hacked, and Ollie, Angela's ex, asks Elliot to take some infected discs to a venue where they're going to launder the money. In reality, it's all part of a plan that leads him to meet Whiterose.",
            thumbnail:
              "https://imgs.search.brave.com/Z7gc5nQnSdN67PiIChjWfdW4I2Kjlovmwahsm__-cgA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmNvbGxpZGVy/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjUvMDcv/aW1nXzE0ODAuSlBH/P3E9NzAmZml0PWNy/b3Amdz04MjUmZHBy/PTE",
          },
          {
            id: "b0ef1c4120aea25c165cc11774775331",
            title: "eps1.8_m1rr0r1ng.qt",
            description:
              "Elliot demands answers, so Mr Robot promises to take him to a place where he can find out everything. Back at his childhood home, the two of them argue and Elliot decides to push him out of the window. There, he discovers that he has been dead for twenty years and that it is all a hallucination.",
            thumbnail:
              "https://imgs.search.brave.com/rBPIlSiS8RmQANP4Xo4qUdjsNVHjBF1MP79sHa6XNaI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9md21l/ZGlhLmZhbmRvbXdp/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDI1LzA3LzEx/MDkzOTA4L21yLXJv/Ym90LTEwMjR4NTc1/LmpwZw",
          },
          {
            id: "0e3e83e95115b5e82a8ad710b0e43a2d",
            title: "eps1.9_zer0-day.avi",
            description:
              "Elliot wakes up inside a car in a car park, with no idea how he got there. Tyrell's world begins to close in on him. Angela receives an unexpected visitor.",
            thumbnail:
              "https://imgs.search.brave.com/RXtzgYvuHQBXRW23ZTk7RN8OiTu_MEFBSLOlj3-nWno/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kbm0u/bmZseGltZy5uZXQv/YXBpL3Y2LzJEdVFs/eDBmTTR3ZDFuenFt/NUJGQmk2SUxhOC9B/QUFBUVNlbkVFQkN4/ckxMLS01MXZZMThf/OXBPdnNncFN4RzFY/WFNRam5LREVUWUhS/YmJmTUhlRFFlMGFM/akw3Y3AtODBzd2Zv/ZEVqb1dCRU9JUEZk/a0ljSTREX2trdGpt/d2RubW9Ra0hMTU0x/VlFmaTZOLUdmU1hu/cGJ5dWhkUVp0SGx1/Sm9Nay1WN0ppamow/RjZoeFEucG5nP3I9/N2Vi",
          },
        ],
      },
    ],
  },
  {
    id: "ca74b68436c58d0f8df7d218593aeba3",
    type: "movie",
    title: "Fight Club",
    description:
      "An insomniac office worker and a soap maker form an underground fight club that turns into something much more.",
    year: 2019,
    director: "David Fincher",
    ageRating: "+18",
    genres: ["Action", "Thriller"],
    rating: 3.9,
    posterUrl: "https://...",
    bannerUrl: "https://preview.redd.it/...",
    cast: [
      {
        id: "ba1f3ce3e3bcb13e7798e81b3097279c",
        name: "William Bradley Pitt",
        role: "Tyler Durden",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/ajNaPmXVVMJFg9GWmu6MJzTaXdV.jpg",
      },
      {
        id: "ba1f3ce3e3bcb13e7798e81b3097279c",
        name: "Edward Norton",
        role: "Narrator",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/8nytsqL59SFJTVYVrN72k6qkGgJ.jpg",
      },
      {
        id: "d3e76aafb5b66e18bd35e45d73adfe69",
        name: "Helena Bonham Carter",
        role: "Marla Singer",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/hJMbNSPJ2PCahsP3rNEU39C8GWU.jpg",
      },
      {
        id: "35610865fc3a95ca175972c2f8bad701",
        name: "Robert Paulson",
        role: "Meat Loaf",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/hJMbNSPJ2PCahsP3rNEU39C8GWU.jpg",
      },
      {
        id: "35610865fc3a95ca175972c2f8bad701",
        name: "Robert Paulson",
        role: "Meat Loaf",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/1zkohpaG3my4qQAZGVgzgPuXwZ6.jpg",
      },
      {
        id: "9381fd74ef9d67c745688afaece5e443",
        name: "Jared Leto",
        role: "Angel Face",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/lZaE3x8yxofNZ96xpthxuVXQxTM.jpg",
      },
      {
        id: "35610865fc3a95ca175972c2f8bad701",
        name: "Zach Grenier",
        role: "Richard Chesler",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/fSyQKZO39sUsqY283GXiScOg3Hi.jpg",
      },
      {
        id: "2eafe2144ebbc6199b5e2d69d057dd2c",
        name: "Holt McCallany",
        role: "The Mechanic",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/iRo9YUNMwZg4UCq7dapo0HydDmI.jpg",
      },
      {
        id: "0860cf806314c1f1ea14aaf90bc98e08",
        name: "Eion Bailey",
        role: "Ricky",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/iRo9YUNMwZg4UCq7dapo0HydDmI.jpg",
      },
      {
        id: "d29be2ad41a3d72d4951d8afa247b27c",
        name: "Richmond Arquette",
        role: "Intern at Hospital",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/7byGiVac0GjBSVD1h6ylZlVXZK6.jpg",
      },
      {
        id: "91c2e5e42f1c20ee8d6aaa60ad46fb7b",
        name: "George Maguire",
        role: "Group Leader at Remaining Men Togheter",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/pyKzJNkpjCA96ItVq93x1Y2YfYx.jpg",
      },
      {
        id: "118c725688ff099fb8e7d1afc543b5f2",
        name: "Eugenie Bondurant",
        role: "Weeping Woman - Onward and Upward",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/9ULAELEKNha7VCJhRWoer58NcJe.jpg",
      },
      {
        id: "f51ae1da1364cf2f906e3ee7c216c75d",
        name: "Christina Cabot",
        role: "Group Leader - Partners in Positivity",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/h1vwbOfITSvDvDq8E9MVvWqMYSr.jpg",
      },
      {
        id: "f718a1900f64e31104e7c4435c15e1d0",
        name: "Sydney 'Big Dawg' Colston",
        role: "Speaker - Free and Clear",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/tdzVh7pstj6rcppqbBOX0KA7mX9.jpg",
      },
      {
        id: "c810b2dbd6aab4806bb623e15f423a0a",
        name: "Rachel Singer",
        role: "Chloe",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/o4Hzvy1VRa3IILMrI45Ia08pstK.jpg",
      },
    ],
  },
  {
    id: "5dcacd4df6e0584c71a391b5520e90d9",
    type: "series",
    title: "Breaking Bad",
    description: "Walter White, an underpaid and unappreciated high school chemistry teacher, is diagnosed with terminal lung cancer. Desperate to secure the financial future of his family, wife Skyler and son Walt Jr.",
    year: 2002,
    director: "Vince Gilligan",
    ageRating: "+18",
    genres: ["Action", "Thriller"],
    rating: 4.95,
    posterUrl: "https://imgs.search.brave.com/JsywxbckU8U8Ky4Db-ZK1N1MUyKm7LK9pBAOXiqSLDg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI1L2Q3/L2Q1LzI1ZDdkNWMw/ZjE4ZTYwNTRlZmFi/ZGViYWVkOTEwNjIz/LmpwZw",
    bannerUrl: "https://imgs.search.brave.com/8xudJgCvJWvcpIS47KLG4RwtKvJNiObMRth0yAZVr7g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC80LzYv/MC8yMjgxOC0yODgw/eDE4MDAtZGVza3Rv/cC1oZC1icmVha2lu/Zy1iYWQtYmFja2dy/b3VuZC5qcGc",
    cast: [
      {
        id: "a275ccf2886dc97a5f4ebae3117af008",
        name: "Bryan Cranston",
        role: "Walter White",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/npIIZJGSrcJIJ6yHdmbqO6Jzo5I.jpg",
      },
      {
        id: "6eb53a7b23c4376c6b692455b5f5b1f1",
        name: "Aaron Paul",
        role: "Jesse Pinkman",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/8Ac9uuoYwZoYVAIJfRLzzLsGGJn.jpg",
      },
      {
        id: "6eb53a7b23c4376c6b692455b5f5b1f1",
        name: "Anna Gunn",
        role: "Skyler White",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/adppyeu1a4REN3khtgmXusrapFi.jpg",
      },
      {
        id: "aab120eb190fac58852a11deb990ba2a",
        name: "RJ Mitte",
        role: "Walter White Jr.",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/sNPA92ZrssYhlaB1UA2pWcLD9db.jpg",
      },
      {
        id: "eb56d8b7cfd27019102457ed62220845",
        name: "Dean Norris",
        role: "Hank Schrader",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/mKRrEbsxAX3ro700HsViFArRM7l.jpg",
      },
      {
        id: "026f4cd70f69a618e591336f8598ee7f",
        name: "Betsy Brandt",
        role: "Marie Schrader",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/xAnuzyjdMbQq9L1c4JNwXL52Wm4.jpg",
      },
      {
        id: "ed252a0379e948778979a4990bc3d3cb",
        name: "Bob Odenkirk",
        role: "Saul Goodman",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/rF0Lb6SBhGSTvjRffmlKRSeI3jE.jpg",
      },
      {
        id: "ed252a0379e948778979a4990bc3d3cb",
        name: "Bob Odenkirk",
        role: "Saul Goodman",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/rF0Lb6SBhGSTvjRffmlKRSeI3jE.jpg",
      },
      {
        id: "ae2b5a28f5e8296417e0d2c4d3dcb4f1",
        name: "Steven Michael Quezada",
        role: "Steven Gomez",
        image: "",
      },
    ],
    season: [
      {
        id: "fc1f53b0bb7b27c257f5adea834c173d",
        number: 1,
        duration: 2033,
        episodes: [
          {
            id: "27cb6a9c075369d09f4a30b8996ec6c3",
            title: "Pilot",
            description:
              "Facing a life-altering diagnosis, chemistry teacher Walter White teams with former student Jesse Pinkman to cook meth, hoping to secure his family's future.",
            thumbnail:
              "https://static.wikia.nocookie.net/breakingbad/images/b/b1/BB_101_S.jpg/revision/latest/scale-to-width-down/250?cb=20170418193804",
            duration: 45,
            season: 1,
            episode: 1,
          },
          {
            id: "4273cf838187f08ab8e1159dcf63c703",
            title: "Cat's in the Bag...",
            description:
              "Walt and Jesse face the messy fallout from their first cook, scrambling to erase evidence and deal with a dangerous loose end as Skyler grows uneasy over Walt's secretive behavior.",
            thumbnail:
              "https://static.wikia.nocookie.net/breakingbad/images/4/4d/BB_102_S.jpg/revision/latest/scale-to-width-down/250?cb=20170418193851",
            duration: 45,
            season: 1,
            episode: 2,
          },
          {
            id: "4196ddb54e80c698ad3d001013a87a84",
            title: "...And the Bag's in the River",
            description:
              "With a dangerous captive in Jesse's basement, Walt faces a moral dilemma while scrambling to cover his tracks at home and keep their fledgling operation alive.",
            thumbnail:
              "https://static.wikia.nocookie.net/breakingbad/images/7/78/Walt-pilot.png/revision/latest?cb=20170514140346",
            duration: 45,
            season: 1,
            episode: 3,
          },
          {
            id: "e58eed6c047b7bafd3c3ac9cb130be8d",
            title: "Cancer Man",
            description:
              "After Walter's cancer diagnosis, a fraught family intervention pushes him to decide about treatment. With money tight, he and Jesse consider their next step in the meth business -- despite the growing risks.",
            thumbnail:
              "https://static.wikia.nocookie.net/breakingbad/images/3/3a/BB_104_S.jpg/revision/latest/scale-to-width-down/250?cb=20170418193956",
            duration: 45,
            season: 1,
            episode: 4,
          },
          {
            id: "fb8e8ccd3462e4962b66c7fba59c6d9e",
            title: "Gray Matter",
            description:
              "Walt considers how to pay for his cancer treatment after reconnecting with former partners who offer help, while Jesse tries to expand their customer base.",
            thumbnail:
              "https://static.wikia.nocookie.net/breakingbad/images/1/17/BB_105_S.jpg/revision/latest/scale-to-width-down/250?cb=20170418194025",
            duration: 45,
            season: 1,
            episode: 5,
          },
          {
            id: "4d71ba19141d0f6e1f4296745391acc4",
            title: "Crazy Handful of Nothin'",
            description:
              "Burned by a crooked deal, Walt summons the nerve to confront the underworld and line up a new distributor, while Jesse scrambles to unload their stash and keep their operation under the radar.",
            thumbnail:
              "https://static.wikia.nocookie.net/breakingbad/images/2/27/BB_106_S.jpg/revision/latest/scale-to-width-down/250?cb=20170418194126",
            duration: 45,
            season: 1,
            episode: 6,
          },
          {
            id: "edeb033f6dfb1d8a6febb805ab860c91",
            title: "A No-Rough-Stuff-Type Deal",
            description:
              "Under pressure from a dangerous new customer, Walt and Jesse scramble to expand their meth operation, devising a risky plan to secure supplies as Walt tries to keep his double life from Skyler.",
            thumbnail:
              "https://static.wikia.nocookie.net/breakingbad/images/6/64/BB_107_S.jpg/revision/latest/scale-to-width-down/250?cb=20170418194158",
            duration: 45,
            season: 1,
            episode: 7,
          },
        ],
      },
    ],
  },
  {
    id: "7f3a1c2d4e5b6f8a9c0d1e2f3a4b5c6d",
    type: "series",
    title: "Stranger Things",
    description:
      "When a boy disappears, his friends, family, and local police discover a series of extraordinary mysteries involving secret government experiments, terrifying supernatural forces, and one very strange little girl.",
    year: 2016,
    director: "The Duffer Brothers",
    ageRating: "+13",
    genres: ["Sci-Fi", "Horror", "Drama"],
    rating: 4.7,
    posterUrl: "https://imgs.search.brave.com/A8DN8IMgc8hgSdO_lchGCir0L6PmpU38mgjmokqEc0s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2MwLzQ3/LzVhL2MwNDc1YTc1/ODYyNmJmMjg0OGVi/ZGQwMDI5OGUzNWNj/LmpwZw",
    bannerUrl: "https://imgs.search.brave.com/l_5s8DDCmJLUPlvNgzgvQafnDU6MQNqU0aAg1MqhW2Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kbm0u/bmZseGltZy5uZXQv/YXBpL3Y2LzJEdVFs/eDBmTTR3ZDFuenFt/NUJGQmk2SUxhOC9B/QUFBUVFCZjhJTHph/cUdHbW10REpWNzFV/WFp2UmtIV3RNbUJt/d0kzclFaMzlTdFk1/ZkNGMzcwTHlfU0Vv/b0ZTNThyREtHZ0Y2/ckVBWXpEWXhvTlVX/MXRyVm1NUlFkcVBy/NzZUWlN3Y3dzcGt0/TEZtQjZISWNlMldI/a3JmbU4tNXlNYWdK/UC1SMHRaVmNFWWNf/RmVtRGEzNTRkQ1N2/Q2suanBnP3I9Yjk5",
    cast: [
      {
        id: "st001",
        name: "Millie Bobby Brown",
        role: "Eleven",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/9GjBDRKhZHxOEYHO2h4JR4HfBhR.jpg",
      },
      {
        id: "st002",
        name: "Finn Wolfhard",
        role: "Mike Wheeler",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/tIFAXCeJFsGZRD3MiDGCCpFpOkH.jpg",
      },
      {
        id: "st003",
        name: "Winona Ryder",
        role: "Joyce Byers",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/yZMkhWXWNFIyHHhHFMHbFBiUYqh.jpg",
      },
      {
        id: "st004",
        name: "David Harbour",
        role: "Jim Hopper",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/qG9s5zLBNJVHRTDoHJnPkWFdwhe.jpg",
      },
    ],
    season: [
      {
        id: "st_s1",
        number: 1,
        duration: 2520,
        episodes: [
          {
            id: "st_e1",
            title: "The Vanishing of Will Byers",
            description:
              "On his way home from a friend's house, young Will sees something terrifying. Nearby, a sinister secret lurks in the depths of a government lab.",
            thumbnail:
              "https://static.wikia.nocookie.net/strangerthings/images/5/5d/S1E1_Thumbnail.jpg/revision/latest/scale-to-width-down/250",
            duration: 47,
            season: 1,
            episode: 1,
          },
          {
            id: "st_e2",
            title: "The Weirdo on Maple Street",
            description:
              "Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.",
            thumbnail:
              "https://static.wikia.nocookie.net/strangerthings/images/2/28/S1E2_Thumbnail.jpg/revision/latest/scale-to-width-down/250",
            duration: 55,
            season: 1,
            episode: 2,
          },
          {
            id: "st_e3",
            title: "Holly, Jolly",
            description:
              "An increasingly desperate Joyce tries to connect with Will. Elsewhere, Eleven struggles to demonstrate her abilities and the boys make a deal.",
            thumbnail:
              "https://static.wikia.nocookie.net/strangerthings/images/4/4b/S1E3_Thumbnail.jpg/revision/latest/scale-to-width-down/250",
            duration: 51,
            season: 1,
            episode: 3,
          },
        ],
      },
    ],
  },
  {
    id: "8a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6e",
    type: "movie",
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    year: 2010,
    director: "Christopher Nolan",
    ageRating: "+13",
    genres: ["Sci-Fi", "Action", "Thriller"],
    rating: 4.9,
    posterUrl: "https://imgs.search.brave.com/qCl5UdzE5mJS9kukA5j-_frGB6vK5_wBLMrBIbTBmIQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC85LzYv/MS8zMDQ4NjctMTUz/NngyNzMyLWlwaG9u/ZS1oZC1pbmNlcHRp/b24tYmFja2dyb3Vu/ZC1pbWFnZS5qcGc",
    bannerUrl: "https://imgs.search.brave.com/QME7BaDyWc_BgW0i7DK8tsFOOyFS2vm73I3ZxI8lQvg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC9uRWFjWmFS/LmpwZw",
    cast: [
      {
        id: "inc001",
        name: "Leonardo DiCaprio",
        role: "Dom Cobb",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/ip3aUIhVDQdWpqHoFjqXMj1nDxA.jpg",
      },
      {
        id: "inc002",
        name: "Joseph Gordon-Levitt",
        role: "Arthur",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/fESmPNjDHD8PXIBLV5Uw5UD8GxT.jpg",
      },
      {
        id: "inc003",
        name: "Elliot Page",
        role: "Ariadne",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/mKH0cCaGcAm6WDfgJzZNzD1LkAA.jpg",
      },
      {
        id: "inc004",
        name: "Tom Hardy",
        role: "Eames",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/d81K2FSLGSP9jhpYuAEZiHKWBhz.jpg",
      },
    ],
  },
  {
    id: "9b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e",
    type: "series",
    title: "The Wire",
    description:
      "The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.",
    year: 2002,
    director: "David Simon",
    ageRating: "+18",
    genres: ["Drama", "Thriller"],
    rating: 4.9,
    posterUrl: "https://imgs.search.brave.com/emmBAP5X5_KOS4LOv77do1HnIZbCa2zG18qS8cw5ru8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODE1N3VnNytLK0wu/anBn",
    bannerUrl: "https://imgs.search.brave.com/NftRARDlsFacm4IiSleszZP_Mz8Fo0cbgi_EcQWf_rM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC8yLzMv/Zi85NjQyMzYtMzg0/MHgyMTYwLWRlc2t0/b3AtNGstdGhlLXdp/cmUtdHYtc2VyaWVz/LWJhY2tncm91bmQu/anBn",
    cast: [
      {
        id: "tw001",
        name: "Dominic West",
        role: "Jimmy McNulty",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/jDRBRpJXYxj0khbM1IVWXvFMjDf.jpg",
      },
      {
        id: "tw002",
        name: "Idris Elba",
        role: "Stringer Bell",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/be1bVHQDPiDGjIjApZtFRUKmYPm.jpg",
      },
      {
        id: "tw003",
        name: "Michael K. Williams",
        role: "Omar Little",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/5QwHRXRFCAlniD1c8uZpVNyLFIr.jpg",
      },
    ],
    season: [
      {
        id: "tw_s1",
        number: 1,
        duration: 3240,
        episodes: [
          {
            id: "tw_e1",
            title: "The Target",
            description:
              "Det. Jimmy McNulty interviews a witness to a murder and finds himself building a case against Baltimore drug lord Avon Barksdale.",
            thumbnail:
              "https://static.wikia.nocookie.net/thewire/images/2/2a/Ep01.jpg/revision/latest/scale-to-width-down/250",
            duration: 61,
            season: 1,
            episode: 1,
          },
          {
            id: "tw_e2",
            title: "The Detail",
            description:
              "McNulty's unit tries to get a warrant for the Barksdale operation. D'Angelo deals with the consequences of a botched drug deal.",
            thumbnail:
              "https://static.wikia.nocookie.net/thewire/images/2/2a/Ep01.jpg/revision/latest/scale-to-width-down/250",
            duration: 59,
            season: 1,
            episode: 2,
          },
        ],
      },
    ],
  },
  {
    id: "ab4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e",
    type: "movie",
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    year: 2008,
    director: "Christopher Nolan",
    ageRating: "+13",
    genres: ["Action", "Drama", "Thriller"],
    rating: 4.95,
    posterUrl: "https://preview.redd.it/give-me-some-of-the-best-movies-wallpapers-for-my-pc-v0-luymik2un9pf1.jpeg?width=736&format=pjpg&auto=webp&s=74b6828732c67b5abb9c2159ceb95d923422a14b",
    bannerUrl: "https://4kwallpapers.com/images/walls/thumbs/24237.jpg",
    cast: [
      {
        id: "tdk001",
        name: "Christian Bale",
        role: "Bruce Wayne / Batman",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/tbHiq03jFGGXmhzdC6sIHDkGBkj.jpg",
      },
      {
        id: "tdk002",
        name: "Heath Ledger",
        role: "The Joker",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/5a3v10cav98G4Yk5UNLUnmNxFhX.jpg",
      },
      {
        id: "tdk003",
        name: "Aaron Eckhart",
        role: "Harvey Dent",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/5vINGcgTVGWnNmFpZr7P8TxJh4I.jpg",
      },
      {
        id: "tdk004",
        name: "Maggie Gyllenhaal",
        role: "Rachel Dawes",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/1nxMKGBM5H9nyb6BVRhTBEb5hyR.jpg",
      },
    ],
  },
  {
    id: "bc5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f",
    type: "series",
    title: "Chernobyl",
    description:
      "In April 1986, an explosion at the Chernobyl nuclear power plant in the USSR becomes one of the world's worst man-made catastrophes.",
    year: 2019,
    director: "Johan Renck",
    ageRating: "+16",
    genres: ["Drama", "Thriller"],
    rating: 4.9,
    posterUrl: "https://imgs.search.brave.com/e5DV2AV2J4CySdBJYQy4AIY0BvbnOoMEHCubtS7DC-g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmlsbW1ha2Vyc2Fj/YWRlbXkuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzEw/L0FydC1hbmQtQ2lu/ZW1hdG9ncmFwaHkt/b2YtSEJPcy1DaGVy/bm9ieWwtRmlyZWZp/Z2h0ZXJzLVRydXRo/LUF0LUFsbC1Db3N0/cy1MaXF1aWRhdG9y/cy1FeHRlcmlvcnMt/TG93LUNvbnRyYXN0/LUNvb2tlLVMyLVBh/bmNocm8uanBn",
    bannerUrl: "https://imgs.search.brave.com/xJtBSQQiQr8wcl9_pIHP3r2uczmwKzMC-X8MPOo5tEA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjEx/MjkwODAwNS9lcy9m/b3RvL2NoZXJub2J5/bC11a3JhaW5lLWEt/dmlldy1mcm9tLWNo/ZXJub2J5bC1hcy11/a3JhaW5pYW4tc29s/ZGllcnMtdmlzaXQt/dGhlLTMwLWtpbG9t/ZXRlci1leGNsdXNp/b24uanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPV9lajRQajVU/azFVTFhQQm9PZGRo/QVVQNkZWOTlDM2xW/Z0JseWJzOElRWms9",
    cast: [
      {
        id: "che001",
        name: "Jared Harris",
        role: "Valery Legasov",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/uPP3xnJP8Z2HXLQvMxMGTtBi1mt.jpg",
      },
      {
        id: "che002",
        name: "Stellan Skarsgård",
        role: "Boris Shcherbina",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/cpqOXYZiZEDFiLnBwKG9tRTfvVh.jpg",
      },
      {
        id: "che003",
        name: "Emily Watson",
        role: "Ulana Khomyuk",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/x5KfPMUyDRCqYGzk2DPVEbdPNtK.jpg",
      },
    ],
    season: [
      {
        id: "che_s1",
        number: 1,
        duration: 300,
        episodes: [
          {
            id: "che_e1",
            title: "1:23:45",
            description:
              "On April 26, 1986, the Chernobyl Nuclear Power Plant suffers a catastrophic explosion. As first responders rush to contain the damage, plant operators attempt to understand what went wrong.",
            thumbnail:
              "https://static.wikia.nocookie.net/chernobyl/images/0/0c/101-title-card.jpg/revision/latest/scale-to-width-down/250",
            duration: 62,
            season: 1,
            episode: 1,
          },
          {
            id: "che_e2",
            title: "Please Remain Calm",
            description:
              "As the Soviet Union scrambles to grasp the scope of the disaster, Legasov briefs Gorbachev on a chilling situation report.",
            thumbnail:
              "https://static.wikia.nocookie.net/chernobyl/images/0/0c/101-title-card.jpg/revision/latest/scale-to-width-down/250",
            duration: 58,
            season: 1,
            episode: 2,
          },
        ],
      },
    ],
  },
  {
    id: "cd6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a",
    type: "movie",
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    year: 2014,
    director: "Christopher Nolan",
    ageRating: "+7",
    genres: ["Sci-Fi", "Drama"],
    rating: 4.8,
    posterUrl: "https://imgs.search.brave.com/sKCWeNoKyCE1ysrvQxEq9jQBRjnSvtyyPz7krSdH4PI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDkyNTU5/NzUuanBn",
    bannerUrl: "https://imgs.search.brave.com/sFDSf_whit_bbeQqyQd3YVppMjBx3-IYuBr4MQowljw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuYWxwaGFjb2Rl/cnMuY29tLzUzMC90/aHVtYmJpZy01MzA1/MDUud2VicA",
    cast: [
      {
        id: "int001",
        name: "Matthew McConaughey",
        role: "Cooper",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/szD7GKBpDpBJzC9RJTEqiPbGl3l.jpg",
      },
      {
        id: "int002",
        name: "Anne Hathaway",
        role: "Brand",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/tLelKoPNiyTCSREAfzmZQfITMEe.jpg",
      },
      {
        id: "int003",
        name: "Jessica Chastain",
        role: "Murph",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/qKjTq2JYxj6PpL3pqORV2boCiLR.jpg",
      },
    ],
  },
  {
    id: "de7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b",
    type: "series",
    title: "Black Mirror",
    description:
      "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
    year: 2011,
    director: "Charlie Brooker",
    ageRating: "+16",
    genres: ["Sci-Fi", "Thriller", "Drama"],
    rating: 4.5,
    posterUrl: "https://imgs.search.brave.com/GNif0Q5VnGK2tk0JaJ0j8RQUdvxs8-E1-T7C187Coe0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWNz/LmZpbG1hZmZpbml0/eS5jb20vYmxhY2tf/bWlycm9yLTg3MjQy/MTg5Mi1tbWVkLmpw/Zw",
    bannerUrl: "https://imgs.search.brave.com/Kq2I1dG3DnJhQVilfSJx4Hqsuy2QHdTQxtDhFDYh5eg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lc3Rh/dGljb3MtY2RuLnBy/ZW5zYWliZXJpY2Eu/ZXMvY2xpcC80NDcy/MWMzMC1iN2ZmLTQz/YTctYTFkNS0yNTM4/NGI0MWNmZGZfYWx0/YS1saWJyZS1hc3Bl/Y3QtcmF0aW9fZGVm/YXVsdF8wLmpwZw",
    cast: [
      {
        id: "bm001",
        name: "Daniel Lapaine",
        role: "Liam Monroe",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/1pdfLvkbY9ohJlCjQH2AjjCozmT.jpg",
      },
      {
        id: "bm002",
        name: "Toby Kebbell",
        role: "Liam",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/5AGzZMOSGQl2r8nMU3jcEsMQNqe.jpg",
      },
    ],
    season: [
      {
        id: "bm_s1",
        number: 1,
        duration: 180,
        episodes: [
          {
            id: "bm_e1",
            title: "The National Anthem",
            description:
              "A fictional British Prime Minister faces an impossible ultimatum when a member of the Royal Family is kidnapped.",
            thumbnail:
              "https://static.wikia.nocookie.net/blackmirror/images/5/52/101_titlecard.png/revision/latest/scale-to-width-down/250",
            duration: 44,
            season: 1,
            episode: 1,
          },
          {
            id: "bm_e2",
            title: "Fifteen Million Merits",
            description:
              "In a world where people earn currency by cycling on stationary bikes, a man tries to help a woman get onto a singing competition show.",
            thumbnail:
              "https://static.wikia.nocookie.net/blackmirror/images/5/52/101_titlecard.png/revision/latest/scale-to-width-down/250",
            duration: 61,
            season: 1,
            episode: 2,
          },
        ],
      },
    ],
  },
  {
    id: "ef8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c",
    type: "movie",
    title: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    year: 1994,
    director: "Quentin Tarantino",
    ageRating: "+18",
    genres: ["Thriller", "Drama", "Comedy"],
    rating: 4.9,
    posterUrl: "https://imgs.search.brave.com/zWbw6JU58U0ay2mYrdTgWK_i0WRLK8jjMWHGKm66aEI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZGlzcGxhdGUuY29t/L2FydHdvcmsvMjcw/eDM4MC8yMDI2LTAx/LTAxLzY3MDI0NGJk/LWI1YWItNDQ4Mi1i/OThlLTZiZjc1ZDE2/NDI4NC5qcGc",
    bannerUrl: "https://imgs.search.brave.com/c5I_rLM5jWoz8Xbi2CT8kU-j12UDrTghQ8veaZuSIhA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbW9u/b2Nocm9tZS1wdWxw/LWZpY3Rpb24tdmlu/Y2VudC12ZWdhLWp1/bGVzLXdpbm5maWVs/ZC0ycm1kaWZkZzhq/NnZ1ZnpxLmpwZw",
    cast: [
      {
        id: "pf001",
        name: "John Travolta",
        role: "Vincent Vega",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/nRhgQ7mfrXMPGlFVnU5thLpAoCA.jpg",
      },
      {
        id: "pf002",
        name: "Samuel L. Jackson",
        role: "Jules Winnfield",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/AioAK64MBbWHKJ1KKxFi6F0YQXQ.jpg",
      },
      {
        id: "pf003",
        name: "Uma Thurman",
        role: "Mia Wallace",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/i38Rnwle2EFCDkQvWJrU2VJ3Cfh.jpg",
      },
      {
        id: "pf004",
        name: "Bruce Willis",
        role: "Butch Coolidge",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/oMmEIBUqPWV8c9s81wHIjTjyKS5.jpg",
      },
    ],
  },
  {
    id: "f09a1b2c3d4e5f6a7b8c9d0e1f2a3b4c",
    type: "series",
    title: "Succession",
    description:
      "The Roy family, owners of the world's largest media and entertainment conglomerate, struggle for power as their aging patriarch considers retirement.",
    year: 2018,
    director: "Jesse Armstrong",
    ageRating: "+18",
    genres: ["Drama", "Comedy"],
    rating: 4.8,
    posterUrl: "https://imgs.search.brave.com/t4gQavOtaf141kYguLAxA_EYd7E6TtqfSoLuuTBldhw/rs:fit:860:0:0:0/g:ce/aHR0cDovL3d3dy5p/bXBhd2FyZHMuY29t/L3R2L3Bvc3RlcnMv/c3VjY2Vzc2lvbi5q/cGc",
    bannerUrl: "https://imgs.search.brave.com/Vzr6rp5inP5qXugh-uHGd_LwviXBJzPqDle-koHOudw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQva2Vu/ZGFsbC1hbmQtc2hp/di1zdWNjZXNzaW9u/LWp1YzVvbnpndDB4/ejVvN3QuanBn",
    cast: [
      {
        id: "suc001",
        name: "Brian Cox",
        role: "Logan Roy",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/fSPecaVCIyBgFMlvpU1l4LqFHwb.jpg",
      },
      {
        id: "suc002",
        name: "Jeremy Strong",
        role: "Kendall Roy",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/nkRoEnvYt9eHxwL10nBmqJPlwQz.jpg",
      },
      {
        id: "suc003",
        name: "Sarah Snook",
        role: "Siobhan Roy",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/pqUNdoYOF7DJJGZR0F1U7zAl8vE.jpg",
      },
      {
        id: "suc004",
        name: "Kieran Culkin",
        role: "Roman Roy",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/5bYKjB5PRiDHFEOoYTqEJkzEiQg.jpg",
      },
    ],
    season: [
      {
        id: "suc_s1",
        number: 1,
        duration: 2700,
        episodes: [
          {
            id: "suc_e1",
            title: "Celebration",
            description:
              "Logan Roy's 80th birthday celebration sets off a chain of events when his health suddenly takes a turn.",
            thumbnail:
              "https://static.wikia.nocookie.net/succession/images/9/9c/Succession_season_1_ep_1_still.jpg/revision/latest/scale-to-width-down/250",
            duration: 58,
            season: 1,
            episode: 1,
          },
          {
            id: "suc_e2",
            title: "Shit Show at the Fuck Factory",
            description:
              "The Roy children scramble to manage the company and the public narrative while their father is incapacitated.",
            thumbnail:
              "https://static.wikia.nocookie.net/succession/images/9/9c/Succession_season_1_ep_1_still.jpg/revision/latest/scale-to-width-down/250",
            duration: 55,
            season: 1,
            episode: 2,
          },
        ],
      },
    ],
  },
  {
    id: "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6",
    type: "movie",
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    year: 1994,
    director: "Frank Darabont",
    ageRating: "+16",
    genres: ["Drama"],
    rating: 4.95,
    posterUrl: "https://imgs.search.brave.com/AW1SamQI_bSijDSCMeEUraiz_AEuMVi4fGDS164XxPU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2Rv/YmxhamUvaW1hZ2Vz/LzUvNTYvVGhlLVNo/YXdzaGFuay1SZWRl/bXB0aW9uLUxhdGlu/bzE5OTQuanBnL3Jl/dmlzaW9uL2xhdGVz/dC9zY2FsZS10by13/aWR0aC1kb3duLzI2/OD9jYj0yMDI0MDIy/NDIzMTEyNCZwYXRo/LXByZWZpeD1lcw",
    bannerUrl: "https://imgs.search.brave.com/3sDS64uVVX8wX4PdIQweaaPaDPm0FPUADwaVw1aoLns/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhLzM4/NGI0MTAxLWE3ZjAt/NDc5Mi1hOWU0LTZi/NWNiMGYyMmNhMi5f/X0NSMCwwLDk3MCw2/MDBfUFQwX1NYOTcw/X1YxX19fLmpwZw",
    cast: [
      {
        id: "tsr001",
        name: "Tim Robbins",
        role: "Andy Dufresne",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/gkNHPJSdBiqXCOQolJqQDHvqWhP.jpg",
      },
      {
        id: "tsr002",
        name: "Morgan Freeman",
        role: "Ellis Boyd 'Red' Redding",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/oIciMDIZR7XVlqMvtRfDmM5sCaB.jpg",
      },
      {
        id: "tsr003",
        name: "Bob Gunton",
        role: "Warden Norton",
        image:
          "https://peliculas.lavanguardia.com/imagenes/w185/9ULAELEKNha7VCJhRWoer58NcJe.jpg",
      },
    ],
  },
];
export const watchingList: WatchingMedia[] = [];
