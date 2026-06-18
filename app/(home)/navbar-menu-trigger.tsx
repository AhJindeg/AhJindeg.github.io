'use client';

import { useEffect, useState } from 'react';
import { NavbarMenuTrigger } from 'fumadocs-ui/layouts/home/navbar';

function useCanHover() {
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setCanHover(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return canHover;
}

type NavbarMenuTriggerButtonProps = React.ComponentProps<
  typeof NavbarMenuTrigger
>;

/**
 * NavbarMenu 触发器：补 cursor-pointer；触屏/粗指针设备禁用 hover 打开，改为点击切换。
 * 与 Fumadocs 移动端折叠按钮的 onPointerMove preventDefault 策略一致。
 */
export function NavbarMenuTriggerButton({
  className,
  onPointerMove,
  ...props
}: NavbarMenuTriggerButtonProps) {
  const canHover = useCanHover();

  return (
    <NavbarMenuTrigger
      {...props}
      className={[className, 'cursor-pointer'].filter(Boolean).join(' ')}
      onPointerMove={
        canHover
          ? onPointerMove
          : (event) => {
              event.preventDefault();
              onPointerMove?.(event);
            }
      }
    />
  );
}
