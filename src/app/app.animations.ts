import {
    trigger,
    transition,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';


export const Animations = {
    slider: trigger('slider', [
        transition('isLeft => centerLeft', [
              query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),
              group([
                  query(':enter', [
                      style({ transform: 'translateX(100%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform: 'translateX(0%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(-100%)' }))
                  ], { optional: true }),
              ])
        ]),
        transition('centerLeft => centerRight', [
              query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),
              group([
                  query(':enter', [
                      style({ transform: 'translateX(100%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform: 'translateX(0%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(-100%)' }))
                  ], { optional: true }),
              ])
        ]),
        transition('centerLeft => isLeft', [
         query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),
              group([
                  query(':enter', [
                      style({ transform: 'translateX(-100%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                       style({ transform: 'translateX(0%)' }),
                       animate('0.5s ease-in-out', 
                       style({ transform: 'translateX(100%)' })
                  )], { optional: true }),
              ])
        ]),
        transition('centerRight => isRight', [
              query(':enter, :leave', 
                  style({ position: 'fixed', width: '100%' }), 
                  { optional: true }),
              group([
                  query(':enter', [
                      style({ transform: 'translateX(100%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(0%)' }))
                  ], { optional: true }),
                  query(':leave', [
                      style({ transform: 'translateX(0%)' }),
                      animate('0.5s ease-in-out', 
                      style({ transform: 'translateX(-100%)' }))
                  ], { optional: true }),
              ])
        ]),
        transition('centerRight => centerLeft', [
            query(':enter, :leave', 
            style({ position: 'fixed', width: '100%' }), 
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.5s ease-in-out', 
                style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                 style({ transform: 'translateX(0%)' }),
                 animate('0.5s ease-in-out', 
                 style({ transform: 'translateX(100%)' })
            )], { optional: true }),
        ])
        ]),
        transition('isRight => centerRight', [
            query(':enter, :leave', 
            style({ position: 'fixed', width: '100%' }), 
            { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.5s ease-in-out', 
                style({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            query(':leave', [
                 style({ transform: 'translateX(0%)' }),
                 animate('0.5s ease-in-out', 
                 style({ transform: 'translateX(100%)' })
            )], { optional: true }),
        ])
       ]),
])
};