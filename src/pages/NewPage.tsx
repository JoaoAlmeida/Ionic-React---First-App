import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonMenuButton, IonButtons, IonBackButton,IonProgressBar, IonAvatar, IonChip, IonIcon, IonLabel, IonList, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';
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
    </IonContent>
  </IonPage>
  
);