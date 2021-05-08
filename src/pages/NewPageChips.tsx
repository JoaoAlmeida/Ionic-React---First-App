import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonMenuButton, IonButtons, IonBackButton, IonProgressBar, IonAvatar, IonChip, IonIcon, IonLabel, IonList, IonItem } from '@ionic/react';
import { closeCircle, heart, pin, text, walk, warning, wifi, wine } from 'ionicons/icons';

export const NewPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons>
          <IonMenuButton menu="menu"></IonMenuButton>
          <IonTitle>Nova página</IonTitle>
        </IonButtons>
        <IonButtons slot="end">
          <IonBackButton defaultHref="/home" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen id="conteudo">
      <IonList>
        <IonItem>
          <IonChip>
            <IonLabel>Default</IonLabel>
          </IonChip>
        </IonItem>

        <IonItem>
          <IonChip>
            <IonLabel color="secondary">Secondary Label</IonLabel>
          </IonChip>
        </IonItem>

        <IonItem>
          <IonChip color="secondary">
            <IonLabel color="dark">Secondary w/ Dark label</IonLabel>
          </IonChip>
        </IonItem>

        <IonItem>
          <IonChip disabled={true}>
            <IonLabel>Disabled Chip</IonLabel>
          </IonChip>
        </IonItem>

        <IonItem>
          <IonChip>
            <IonIcon icon={pin} />
            <IonLabel>Default</IonLabel>
          </IonChip>
        </IonItem>

        <IonItem>
          <IonChip>
            <IonIcon icon={heart} color="dark" />
            <IonLabel>Default</IonLabel>
          </IonChip>
        </IonItem>

        <IonItem>
          <IonChip>
            <IonLabel>Button Chip</IonLabel>
            <IonIcon icon={closeCircle} />
          </IonChip>
        </IonItem>

        <IonItem>
          <IonChip>
            <IonIcon icon={pin} color="primary" />
            <IonLabel>Icon Chip</IonLabel>
          </IonChip>
        </IonItem>

        <IonItem>
          <IonChip>
            <IonAvatar>
              <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
            </IonAvatar>
            <IonLabel>Avatar Chip</IonLabel>
            <IonIcon icon={closeCircle} />
          </IonChip>
        </IonItem>

      </IonList>
    </IonContent>
  </IonPage>

);