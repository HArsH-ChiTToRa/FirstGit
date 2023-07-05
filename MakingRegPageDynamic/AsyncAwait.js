console.log(`Person 1: shows tickets`);
console.log(`Person 2: shows tickets`);

const preMovie = async ()=> {
    const promiseWifeBringingTicks = new Promise ((resolve, reject)=>{
        setTimeout(()=> resolve(`tickets`), 3000);
    });
    const getPopcorn = new Promise((resolve, reject)=> resolve(`popcorn`));
    const Butter = new Promise((resolve, reject)=> resolve(`butter`));
    const coldrink = new Promise((resolve, reject)=> resolve(`coldrinks`))

    let ticket = await promiseWifeBringingTicks;
    console.log(`Wife : I have a ${ticket}`);
    console.log(`Husband: We should go in`);
    console.log(`Wife: No I am hungry`);
    let popcorn = await getPopcorn;
    console.log(`Husband: I got some ${popcorn}`);
    console.log(`Husband: We should go in`);
    console.log(`Wife: I nedd butter on my popcorn`);
    let butter = await Butter;
    console.log(`Husband: I got some ${butter}`);
    console.log(`Husband: We should go in`);
    console.log(`Wife: I want some coldrinks also`);
    let coldrinks = await coldrink;
    console.log(`Husband: I got the ${coldrinks}`);
    console.log(`Husband: Anything else darling`);
    console.log(`Wife: No, we are getting late. We should go in`);
    console.log(`Husband: Thanks for the reminder`);    

    return ticket;

}
preMovie().then((m)=> console.log(`Person 3: shows ${m}`));

console.log(`Person 4: shows tickets`);
console.log(`Person 5: shows tickets`);