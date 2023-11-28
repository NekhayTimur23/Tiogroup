import ConcultationSection from '@/components/ConcultationSection/Concultation';
import style from './ConsultationSectionPhone.module.sass'


function ConsultationSectionPhone() {
    return (
        <div className={style.consultPhone}>
            <div className={style.consultPhoneContainer}>
                <div className={style.consultPhoneContent}>
                    <div className={style.consultPhone}>
                    </div>
                </div>
            </div>
            < ConcultationSection sectionPhone={true}/>
        </div>
    )
}


export default ConsultationSectionPhone;
