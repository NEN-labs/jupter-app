'use client';

import Link from 'next/link'

import Input from '@/components/Input';
import Button from '@/components/Button';

import { 
  Section,
  Container,
  Modal,
  ModalContent,
  ModalHeading,
  ModalForm,
  LogoWrapper } from '../components/page/styles'

export default function Page() {
  return (
    <Section>
      <Container>
        <Modal>
          <ModalContent>
            <ModalHeading>
              Join our ecossystem, the path to venture capital's next chapter begins here.
            </ModalHeading>
            <ModalForm method='GET'>
              <Input label="Login" type="text" placeholder="E-mail"/>
              <Input label="Password" type="password" placeholder="Your Jupter pass"/>
              <Link href="/deal"><Button text="Join"/></Link>
            </ModalForm>
          </ModalContent>
        </Modal>
      </Container>
      <LogoWrapper>
        <img src="./jupter-logo.png"/>
      </LogoWrapper>
    </Section>
  );
}