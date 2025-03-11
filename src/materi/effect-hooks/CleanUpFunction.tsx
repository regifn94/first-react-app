import { useEffect } from 'react';

const CleanUpFunction = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('Interval is running');
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log('interval di bersihkan')
        }
    }, [])
  return (
    <div>
      CleanUpFunction
    </div>
  )
}

export default CleanUpFunction
