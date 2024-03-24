
// ^ Different Ways to define function i Typescript.

// ? 1. With Parameters and without return type

function withParameter(name: string, age: number) {


}


// ? 2. With Parameters and with return type

function withReturnType(name: string, age: number): string {

    return "";

}



// ? Arrow Function with return type

const arrowWithParameterReturnType = (name: string, age: number): string => {

    return "";
}


// ? Function with Object as return type

function objectReturn(): {} {

    return {};
    
}