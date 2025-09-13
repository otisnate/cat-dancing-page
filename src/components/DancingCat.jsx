import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'
import { useAnimation } from '../hooks/useAnimation'

function DancingCat() {
  const { 
    isAnimating, 
    animationSpeed, 
    animationType, 
    toggleAnimation, 
    changeAnimationSpeed,
    changeAnimationType 
  } = useAnimation()

  return (
    <div className="dancing-cat-container">
      <h1>춤추는 고양이 🐱</h1>
      
      <div className="cat-stage">
        <img 
          src={catSvg} 
          alt="Dancing Cat" 
          className={`dancing-cat ${isAnimating ? 'animate' : ''} ${animationType}`}
          style={{
            animationDuration: `${2 / animationSpeed}s`
          }}
        />
      </div>
      
      <div className="controls">
        <button onClick={toggleAnimation} className="dance-button">
          {isAnimating ? '정지 ⏸️' : '춤추기 💃'}
        </button>
        
        <div className="speed-controls">
          <label>속도: </label>
          <button 
            onClick={() => changeAnimationSpeed(0.5)}
            className={`speed-btn ${animationSpeed === 0.5 ? 'active' : ''}`}
          >
            느림
          </button>
          <button 
            onClick={() => changeAnimationSpeed(1)}
            className={`speed-btn ${animationSpeed === 1 ? 'active' : ''}`}
          >
            보통
          </button>
          <button 
            onClick={() => changeAnimationSpeed(2)}
            className={`speed-btn ${animationSpeed === 2 ? 'active' : ''}`}
          >
            빠름
          </button>
        </div>
        
        <div className="type-controls">
          <label>스타일: </label>
          <button 
            onClick={() => changeAnimationType('dance')}
            className={`type-btn ${animationType === 'dance' ? 'active' : ''}`}
          >
            댄스
          </button>
          <button 
            onClick={() => changeAnimationType('wiggle')}
            className={`type-btn ${animationType === 'wiggle' ? 'active' : ''}`}
          >
            흔들기
          </button>
          <button 
            onClick={() => changeAnimationType('bounce')}
            className={`type-btn ${animationType === 'bounce' ? 'active' : ''}`}
          >
            바운스
          </button>
        </div>
      </div>
      
      <div className="instructions">
        <p>버튼을 클릭하거나 <kbd>스페이스바</kbd>를 눌러 고양이의 춤을 시작하거나 멈춰보세요!</p>
        <p>속도와 스타일을 조정할 수 있습니다.</p>
      </div>
    </div>
  )
}

export default DancingCat