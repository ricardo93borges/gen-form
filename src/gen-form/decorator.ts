import "reflect-metadata";

export function text(target: Object, propertyKey: string | symbol) {
    Reflect.defineMetadata("fg:text", "text", target, propertyKey);
}

export function number(target: Object, propertyKey: string | symbol) {
    Reflect.defineMetadata("fg:number", "number", target, propertyKey);
}

export function date(target: Object, propertyKey: string | symbol) {
    Reflect.defineMetadata("fg:date", "date", target, propertyKey);
}

export function email(target: Object, propertyKey: string | symbol) {
    Reflect.defineMetadata("fg:email", "email", target, propertyKey);
}

export function password(target: Object, propertyKey: string | symbol) {
    Reflect.defineMetadata("fg:password", "password", target, propertyKey);
}

export function tel(target: Object, propertyKey: string | symbol) {
    Reflect.defineMetadata("fg:tel", "tel", target, propertyKey);
}