function wakeDog(dogName, dogBreed) {
    const activity = `Wake ${dogName} the ${dogBreed}`
    return activity
  }

function leashDog(dogName, dogBreed) {
    const activity = `Leash ${dogName} the ${dogBreed}`
    return activity
}

function walkToPark(dogName, dogBreed) {
    const activity = `Walk to the park with ${dogName} the ${dogBreed}`
    return activity
}

function throwFrisbee(dogName, dogBreed) {
    const activity = `Throw the frisbee for ${dogName} the ${dogBreed}`
    return activity
}

function walkHome(dogName, dogBreed) {
    const activity = `Walk home with ${dogName} the ${dogBreed}`
    return activity
}

function unleashDog(dogName, dogBreed) {
    const activity = `Unleash ${dogName} the ${dogBreed}`
    return activity
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]



function exerciseDog(dogName, dogBreed) {
    const activityLog = []
    for (let i = 0;i < routine.length; i++) {
        const activity = routine[i](dogName, dogBreed)
        activityLog.push(activity)
    }
    return activityLog
}