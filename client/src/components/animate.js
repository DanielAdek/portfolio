import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Roll from 'react-reveal/Roll';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Flash from 'react-reveal/Flash';
import RubberBand from 'react-reveal/RubberBand';
import Shake from 'react-reveal/Shake';
import Swing from 'react-reveal/Swing';
import Tada from 'react-reveal/Tada';
import Jump from 'react-reveal/Jump';
import Jello from 'react-reveal/Jello';
import HeadShake from 'react-reveal/HeadShake';


export const Animate = ({ type, children }) => {
  const Element = type === "flip" ? <Flip>{children}</Flip> :
  type === 'zoom' ? <Zoom>{children}</Zoom> :
  type === 'Bounce' ? <Bounce>{children}</Bounce> :
  type === 'rotate' ? <Rotate>{children}</Rotate> :
  type === 'roll' ? <Roll>{children}</Roll> :
  type === 'flash' ? <Flash>{children}</Flash> :
  type === 'rubber' ? <RubberBand>{children}</RubberBand> :
  type === 'shake' ? <Shake>{children}</Shake> :
  type === 'headshake' ? <HeadShake>{children}</HeadShake> :
  type === 'swing' ? <Swing>{children}</Swing> :
  type === 'jump' ? <Jump>{children}</Jump> :
  type === 'tada' ? <Tada>{children}</Tada> :
  type === 'jello' ? <Jello>{children}</Jello> : <Fade>{children}</Fade>;
  return Element;
}