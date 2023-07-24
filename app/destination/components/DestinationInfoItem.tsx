import classNames from 'classnames';

export interface DestinationInfoItemProps {
  label: string;
  text: string;
}

const DestinationInfoItem = ({ label, text }: DestinationInfoItemProps) => {
  return (
    <div className={classNames(/* 'mb-8', 'last:mb-0' */)}>
      <p
        className={classNames(
          'text-loose mb-3 font-sans-condensed text-2xs uppercase text-brand'
        )}
      >
        {label}
      </p>
      <p className={classNames('font-serif text-lg uppercase')}>{text}</p>
    </div>
  );
};

export default DestinationInfoItem;
