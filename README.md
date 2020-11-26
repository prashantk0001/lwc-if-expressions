# lwc-if-expressions

```
<c-lwc-if condition="(this.a == this.b) && (this.c == 6 || this.b == 'easypeasy')" scope={scope}>
    <div slot="if">
        IFFFFFFFFFFFFFFFFF
    </div>
    <div slot="else">
        ELSEEEEEEEEEEEEEE
    </div>
</c-lwc-if>
```
Does it look more readable? let's take a deeper look:

Write expressions in component definition to handle complex rendering scenarios without learning a new expression language.

With Visualforce & Aura, developers had luxury to render HTML based on expressions, Eg. {!A == B}
While Lightning web component needs the use of individual javascript get properties to achieve similar feats, here's an example how you can natively achieve this:

`In template:`
```
<template if:true={decision}>
    print this
</template>
```
`In JS Controller:`
```
get scope(){
    return this.a == this.b;
}
```

the above example bounds you to implement multiple get properties within js controller.

### Now lets rewrite the same using lwc-if-expressions

`In template:`
```
<c-lwc-if condition="this.a == this.b" scope={scope}>
    <div slot="if">
        IFFFFFFFFFFFFFFFFF
    </div>
    <div slot="else">
        ELSEEEEEEEEEEEEEE
    </div>
</c-lwc-if>
```
`In JS Controller:`

```
get scope(){
    return {
        a : this.a,
        b : this.b
    }
}
```

So for complex,multiple rendering scenarios we only need to create a single scope get() property which would contain all the decision making props within the expression, which allows you to write expressions within the templates and makes code more readable & easy to implement.

# Get Started:

You'd find a working example for lwc-if-expressions in the example module.
     
