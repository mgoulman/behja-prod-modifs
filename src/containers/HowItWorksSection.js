import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

const HowItWorksSection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className=' w-[90%] h-full  lg:w-[75%]'>
      <div className='flex flex-col justify-center items-center'>
        <p className='heading-01-semibold text-primary-900'>
          {t('How it Works')}
        </p>
        <p className='paragraph-02-regular text-primary-700 mt-1'>
          {t('Home ownership with Behja is a simple four step process')}
        </p>
      </div>

      <div
        className={`flex flex-col-reverse lg:flex lg:${
          i18n.language === 'Ar' ? 'flex-row-reverse text-end' : 'flex-row'
        } lg:justify-between lg:items-center`}
        id='howitworks'
      >
        <div className={`mt-20 w-full flex flex-col justify-center items-center ${i18n.language === "Ar" ? "lg:items-end" : "lg:items-start"} `}>
          <div
            className={`flex flex-col gap-5 justify-center ${
              i18n.language === 'Ar' ? 'items-end' : 'items-start'
            } `}
          >
            <div
              className={`flex ${
                i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'
              } gap-5`}
            >
              <p className='heading-02-semibold text-primary-900'>{i18n.language === "Ar" ? ".1" : "1."}</p>
              <div>
                <p className='heading-02-semibold text-primary-900'>
                  {t('Choose a property')}
                </p>
                <p
                  className='paragraph-02-regular text-primary-700 mt-3'
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {t('Choose any property available for sale\non the market.')}
                </p>
              </div>
            </div>
            <div
              className={`flex ${
                i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'
              } gap-5`}
            >
              <p className='heading-02-semibold text-primary-900'>{i18n.language === "Ar" ? ".2" : "2."}</p>
              <div>
                <p className='heading-02-semibold text-primary-900'>
                  {t('Apply & get approved')}
                </p>
                <p
                  className='paragraph-02-regular text-primary-700 mt-3'
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {t(
                    'We will assess your eligibility, buy the\nproperty and rent it to you.'
                  )}
                </p>
              </div>
            </div>
            <div
              className={`flex ${
                i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'
              } gap-5`}
            >
              <p className='heading-02-semibold text-primary-900'>{i18n.language === "Ar" ? ".3" : "3."}</p>
              <div>
                <p className='heading-02-semibold text-primary-900'>
                  {t('Move in & build savings')}
                </p>
                <p
                  className='paragraph-02-regular text-primary-700 mt-3'
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {t(
                    'We will embed savings directly into each\nrental payment.'
                  )}
                </p>
              </div>
            </div>
            <div
              className={`flex ${
                i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'
              } gap-5`}
            >
              <p className='heading-02-semibold text-primary-900'>{i18n.language === "Ar" ? ".4" : "4."}</p>
              <div>
                <p className='heading-02-semibold text-primary-900'>
                  {t('Own your apartment')}
                </p>
                <p
                  className='paragraph-02-regular text-primary-700 mt-3'
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {t(
                    'You have the option to buy your home\nin 3 years or less.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`w-full flex justify-center items-center lg:w-auto`}>
          <div className=' bg-primary-500 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[400px] lg:h-[400px] mt-16'>
            <img
              src='./assets/rectangle.png'
              className='absolute w-[300px] h-[300px] mt-[-20px] ml-[-20px] md:w-[500px] md:h-[500px] lg:w-[400px] lg:h-[400px] lg:ml-[-20px] lg:mt-[-20px] object-cover'
              alt='rectangle'
            />
          </div>
        </div>
      </div>
      <div
        className={`flex text-center ${
          i18n.language === 'Ar' ? 'flex-row-reverse' : 'flex-row'
        } items-center justify-center gap-5 mt-10`}
      >
        {/* <button className="bg-primary-300 paragraph-01-regular text-shades-black rounded py-3 px-8" onClick={() => navigate('/homefinder')}>{t('Find a property')}</button> */}
        {/* <button
          onClick={() => navigate('https://try.behja.co/20214301-e1aa-4212-b267-8c0abcd6f97d')}
        >
          {t('sign up to the waitlist')}
        </button> */}
        <Link
          to='https://try.behja.co/20214301-e1aa-4212-b267-8c0abcd6f97d'
          className='bg-primary-600 paragraph-01-regular text-shades-white rounded py-3 px-8'
        >
          {t('sign up to the waitlist')}
        </Link>
      </div>
    </section>
  );
};

export default HowItWorksSection;
