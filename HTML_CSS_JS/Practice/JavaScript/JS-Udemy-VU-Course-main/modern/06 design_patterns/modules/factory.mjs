import {baker} from "./staff.mjs";

export const factory = {
    makeCupcake(toppings) {
       return baker.bake( "cupcake", toppings );
    },
    makeMuffin(mSize) {
       return baker.bake( "muffin", mSize );
    }
}