package com.example.vidiy.labfinal;

import android.content.Intent;
import android.content.SharedPreferences;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import com.facebook.CallbackManager;
import com.facebook.FacebookCallback;
import com.facebook.FacebookException;
import com.facebook.FacebookSdk;
import com.facebook.login.LoginManager;
import com.facebook.login.LoginResult;
import com.facebook.login.widget.LoginButton;

public class MainActivity extends AppCompatActivity {
    EditText username;
    EditText password;
    CallbackManager callbackManager;
    LoginButton login_button;
    TextView txtstatus;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        FacebookSdk.sdkInitialize( getApplicationContext() );
        setContentView( R.layout.activity_main );
        TextView txtview = (TextView) findViewById( R.id.tvregister );
        EditText username = (EditText) findViewById( R.id.etusername );
        EditText password = (EditText) findViewById( R.id.etpassword );
        Button login = (Button) findViewById( R.id.etlogin );

        txtview.setOnClickListener( new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(MainActivity.this,RegisterActivity.class);
                MainActivity.this.startActivity(intent);
            }

        } );
        initializeControls();
        loginWithFB();
    }

    private void initializeControls()
    {
        callbackManager = CallbackManager.Factory.create();
        login_button = (LoginButton) findViewById( R.id.login_button );
        txtstatus =(TextView) findViewById( R.id.txtStatus );


    }
    private void loginWithFB()
    {
        LoginManager.getInstance().registerCallback( callbackManager, new FacebookCallback<LoginResult>() {
            @Override
            public void onSuccess(LoginResult loginResult) {

                txtstatus.setText( "Login Sucess\n"+loginResult.getAccessToken() );


                //startActivity(redirect);

            }

            @Override
            public void onCancel() {
                txtstatus.setText( "Login canceled");
            }

            @Override
            public void onError(FacebookException error) {

                txtstatus.setText( "Login error\n"+error.getMessage());

            }
        } );
    }
    public void validate(View view)
    {



        /*SharedPreferences sp1=this.getSharedPreferences("Login", MODE_PRIVATE);

        String unm =sp1.getString("User", null);
        String pass= sp1.getString("pass", null);*/




        //new
        EditText txtUsername = (EditText) findViewById(R.id.etusername);
        EditText txtPassword = (EditText) findViewById(R.id.etpassword);
        TextView lblUsernameError = (TextView) findViewById(R.id.lblUsernameError);
        TextView lblPasswordError = (TextView) findViewById(R.id.lblPasswordError);

        //Getting values from controls.
        String username = txtUsername.getText().toString();
        String password = txtPassword.getText().toString();

        //Setting empty string to the error labels.
        lblUsernameError.setText("");
        lblPasswordError.setText("");

        //Checking the username is empty or not.
        if(username.isEmpty())
        {
            lblUsernameError.setText("Please enter the username.");
        }
        //Checking the password is empty or not.
        else if(password.isEmpty())
        {
            lblPasswordError.setText("Please enter password");
        }
        //Validating the username and password.
        else if(username.equalsIgnoreCase("srinu") && password.equals("Srinu"))
        {
            Intent redirect = new Intent(this,WelcomeActivity.class).putExtra("username",username);

            startActivity(redirect);
        }
        else {
            lblPasswordError.setText("Invalid Username/Password.");
        }
    }


}


