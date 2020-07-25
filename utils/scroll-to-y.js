/**
 * @description 平滑滚动
 * @module utils/scroll-to-y
*/

/**
 * 平滑滚动到页面的某个位置（Y轴）
 * @param {object} param 滚动参数
 * @param {number} param.scrollTargetY  滚动到Y轴的目标位置
 * @param {number} param.speed  滚动速度
 * @param {string} param.easing  滚动效果easing，支持 `easeOutSine`，`easeInOutSine`，`easeInOutQuint`
 * @param {function} param.endCallback 滚动结束后的回调函数
 */
export function scrollToY({
    scrollTargetY = 0,
    speed = 2000,
    easing = 'easeOutSine',
    endCallback = () => {}
  } = {}) {
  let scrollY = window.scrollY || document.documentElement.scrollTop
  let currentTime = 0
  let time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8))
  let easingEquations = {
    easeOutSine: (pos) => Math.sin(pos * (Math.PI / 2)),
    easeInOutSine: (pos) => (-0.5 * (Math.cos(Math.PI * pos) - 1)),
    easeInOutQuint: (pos) => {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 5)
      }
      return 0.5 * (Math.pow((pos - 2), 5) + 2)
    }
  }
  function tick() {
    currentTime += 1 / 60

    let p = currentTime / time
    let t = easingEquations[easing](p)

    if (p < 1) {
      requestAnimationFrame(tick)
      window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t))
    } else {
      window.scrollTo(0, scrollTargetY)
      endCallback()
    }
  }
  tick()
}