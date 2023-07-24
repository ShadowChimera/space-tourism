import { LoadingIcon } from '@/components/icons';
import classNames from 'classnames';

const Loading = () => {
  return (
    <div
      className={classNames(
        'absolute inset-0 flex min-h-screen items-center justify-center'
      )}
    >
      <LoadingIcon size={64} strokeWidth={6} />
    </div>
  );
};

export default Loading;
