export const getAnimationTimeInMiliSeconds = () => {
    const animationTime = getComputedStyle(document.documentElement).getPropertyValue("--animation-time");
    const animationTimeInMiliSeconds = animationTime.substring(0, 3);
    
    return animationTimeInMiliSeconds;
}