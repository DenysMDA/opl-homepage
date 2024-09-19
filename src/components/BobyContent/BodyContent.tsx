import BodyLeftBlock from './cmps/BodyLeftBlock'
import './bodyContent.scss'
import BodySlider from './cmps/BodySlider'

const  BodyContent = () => {
  return (
    <main>
      <BodyLeftBlock 
        title='Try Teams Calling for free and get support with your deployment'
        description='With all these capabilities launching, it’s important to keep in mind that Teams Calling can be rolled out in weeks – not months or years – as Lumen (formerly CenturyLink) showed by rolling out Calling globally to over 40,000 users in 4 weeks.'  
        optionalInfo='To learn more and get started, check out the links below for additional information and guidance:'
        link='https://aka.ms/e5trial'
        btnText='Free Trial'
        imgClass='first-img'
     />

      <BodyLeftBlock 
        title='Partner benefits'
        bodyclass='bodycontent-right'
        description='Operator Connect allows you to scale your Direct Routing service to provide a pure cloud-managed solution to your customers. Through Operator Connect, you can create automations to streamline provisioning, billing, and reporting. In addition, you can uncover go-to-market opportunities for existing and new customers.'  
        optionalInfo='Do you want learn more? Click on the link below:'
        link='https://cloudpartners.transform.microsoft.com/partner-gtm/operators/connect'
        btnText='Learn More'
        imgClass='second-img'
        side='right'
     />

      <BodyLeftBlock 
        title='How does Operator Connect work'
        description='Our commitment to creating a best-in-class and modern calling experience begins with the deployment of Teams Calling, including if you want to enable calling with your own operator, as many organizations do. To that end, we are very excited to announce Operator Connect, a new operator-managed service for bringing PSTN calling to Teams. Operator Connect makes it simple to bring your operator to Teams if they are participating in the program, and it unlocks several important benefits:'  
        optionalInfo='Introducing Operator Connect and more Teams Calling updates:'
        link='https://techcommunity.microsoft.com/t5/microsoft-teams-blog/introducing-operator-connect-and-more-teams-calling-updates/ba-p/2176398'
        btnText='Go to Learn'
        imgClass='third-img'
     />

     <div className='bodycontent-prefooter'>
        <h2>Join and become our client right now</h2>
        <p style={{textDecoration: "underline"}}>images must be replaced with correct ones</p>
        <div className='bodycontent-clients'>
          <BodySlider/>
        </div>
     </div>
    </main>
  )
}

export default BodyContent
