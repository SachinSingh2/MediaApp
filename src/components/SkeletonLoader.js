import React from 'react'
import classnames from 'classnames'

export default function SkeletonLoader({times , className}) {

    const outer = classnames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        className
    )
    const inner = classnames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200'
    )


    // Two ways to do this.
    // first 
    const boxes = []
    for(let i = 0;i<times;i++){
        boxes.push(<div className={outer} key={i}>
            <div className={inner}/>
        </div>)
    }
    // second
    // const boxes = Array(times).fill(0).map((_ , i)=>{
    //     return <div key={i}/>
    // })



  return boxes
}
