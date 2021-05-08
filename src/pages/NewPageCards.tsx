import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonMenuButton, IonButtons, IonBackButton,IonCard,IonCardSubtitle,
  IonCardHeader,IonCardTitle,IonCardContent,IonItem, IonButton, IonIcon, IonLabel} from '@ionic/react';
import { pin, walk, warning, wifi, wine } from 'ionicons/icons';

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
    <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
            This is content, without any paragraph or header tags,
            within an ion-cardContent element.
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem href="/home" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>

          <IonItem href="/home">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 activated</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>

    </IonContent>
  </IonPage>
  
);