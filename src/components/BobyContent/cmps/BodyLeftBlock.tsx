interface BodyLeftBlockProps {
  side?: string;
  title: string;
  description?: string;
  optionalInfo?: string;
  link?: string;
  bodyclass?: string;
  btnText?: string,
  imgClass?: string
}

const BodyLeftBlock = ({ side = '', title, description = '', optionalInfo = '', link, bodyclass = '', imgClass = '', btnText = '' }: BodyLeftBlockProps) => {
  return (
    <section className={`bodycontent${side} ${bodyclass}`} aria-labelledby={`section-title-${title}`}>
        <div className='bodycontent-img'>
          <div role='img' className={`bodycontent-img_wrapper ${imgClass}`} aria-label={title} />
        </div>
        <div className='bodycontent-content'>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{optionalInfo}</p>
          <div className='bodycontent-btn'>
            <a href={link} aria-label={`Learn more about ${title}`} target="_blank" rel="noopener noreferrer">{btnText}</a>
          </div>
        </div>
    </section>
  );
};

export default BodyLeftBlock