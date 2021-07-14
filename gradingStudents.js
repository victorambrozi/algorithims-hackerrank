const gradingStudents = (
    grades = [73, 67, 38, 33]
) => {

    for (let i = 0; i < grades.length; i++) {
        // const multiple = grades[i] - (grades[i] % 5);

        // if (grades[i] >= 38 && grades[i] - (grades % 5) > 3) {
            // grades[i] += (5 - (grades[i] % 5))
            console.log(grades[i] % 5 >= 3)
        // }

        // console.log(multiple)
        
    }
}

gradingStudents();