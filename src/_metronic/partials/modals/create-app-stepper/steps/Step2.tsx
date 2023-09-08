/* eslint-disable jsx-a11y/anchor-is-valid */
import { StepProps } from '../IAppModels'
import car1 from '../../../../../assest/images/car1.jpg'

const Step2 = ({ data, updateData }: StepProps) => {
  return (
    <div className='pb-5' data-kt-stepper-element='content'>
      <div className='w-100'>
        {/*begin::Form Group */}
        <div className='fv-row'>
          {/* begin::Label */}
          <label className='d-flex align-items-center fs-5 fw-semibold mb-4'>
            <span className='required'>Cars</span>
            <i
              className='fas fa-exclamation-circle ms-2 fs-7'
              data-bs-toggle='tooltip'
              title='Specify your apps framework'
            ></i>
          </label>
          {/* end::Label */}
          {/*begin:Option */}
          <label className='d-flex align-items-center justify-content-between cursor-pointer mb-6'>
            <span className='d-flex align-items-center me-2'>
              <span className='symbol symbol-50px me-6'>
                <span className='symbol-label bg-light-warning'>
                  <img src={car1} height={30} />
                </span>
              </span>

              <span className='d-flex flex-column'>
                <span className='fw-bolder fs-6'>Car 1</span>
                <span className='fs-7 text-muted'>Sports card</span>
              </span>
            </span>

            <span className='form-check form-check-custom form-check-solid'>
              <input
                className='form-check-input'
                type='radio'
                name='appFramework'
                value='HTML5'
                checked={data.appFramework === 'HTML5'}
                onChange={() => updateData({ appFramework: 'HTML5' })}
              />
            </span>
          </label>
          {/*end::Option */}

          {/*begin:Option */}
          <label className='d-flex align-items-center justify-content-between cursor-pointer mb-6'>
            <span className='d-flex align-items-center me-2'>
              <span className='symbol symbol-50px me-6'>
                <span className='symbol-label bg-light-success'>
                  <img src={car1} height={30} />
                </span>
              </span>

              <span className='d-flex flex-column'>
                <span className='fw-bolder fs-6'>Car 2</span>
                <span className='fs-7 text-muted'>Sedan Car</span>
              </span>
            </span>

            <span className='form-check form-check-custom form-check-solid'>
              <input
                className='form-check-input'
                type='radio'
                name='appFramework'
                value='ReactJS'
                checked={data.appFramework === 'ReactJS'}
                onChange={() => updateData({ appFramework: 'ReactJS' })}
              />
            </span>
          </label>
          {/*end::Option */}

          {/*begin:Option */}
          <label className='d-flex align-items-center justify-content-between cursor-pointer mb-6'>
            <span className='d-flex align-items-center me-2'>
              <span className='symbol symbol-50px me-6'>
                <span className='symbol-label bg-light-danger'>
                  <img src={car1} height={30} />
                </span>
              </span>

              <span className='d-flex flex-column'>
                <span className='fw-bolder fs-6'>Car 3</span>
                <span className='fs-7 text-muted'>Hatchback</span>
              </span>
            </span>

            <span className='form-check form-check-custom form-check-solid'>
              <input
                className='form-check-input'
                type='radio'
                name='appFramework'
                value='Angular'
                checked={data.appFramework === 'Angular'}
                onChange={() => updateData({ appFramework: 'Angular' })}
              />
            </span>
          </label>
          {/*end::Option */}

          {/*begin:Option */}

          {/*end::Option */}
        </div>
        {/*end::Form Group */}
      </div>
    </div>
  )
}

export { Step2 }
