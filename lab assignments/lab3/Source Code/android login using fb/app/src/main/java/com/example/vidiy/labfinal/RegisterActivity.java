package com.example.vidiy.labfinal;

import android.content.Intent;
import android.content.SharedPreferences;
import android.icu.util.LocaleData;
import android.os.LocaleList;
import android.preference.PreferenceManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class RegisterActivity extends AppCompatActivity {
    EditText txtUsername ;
    EditText gender;
    EditText university;
    EditText branch;
    EditText password;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate( savedInstanceState );
        setContentView( R.layout.activity_register );
    }
    public void register(View view)
    {
        txtUsername =(EditText) findViewById( R.id.etusername );
        gender =(EditText) findViewById( R.id.etgender);
        university =(EditText) findViewById( R.id.etuniversity );
        branch =(EditText) findViewById( R.id.etbranch );
        password =(EditText) findViewById( R.id.etpassword );
       // bregister=(Button) findViewById( R.id.etregister);
        String v1;
        v1=txtUsername.getText().toString();
        String v2;
        v2=gender.getText().toString();
        String v3;
        v3=university.getText().toString();
        String v4;
        v4=branch.getText().toString();
        String v5;
        v5=password.getText().toString();


        //storing data using shared preferences
        SharedPreferences myPreferences
                = PreferenceManager.getDefaultSharedPreferences(RegisterActivity.this);
        SharedPreferences.Editor myEditor = myPreferences.edit();
        myEditor.putString("NAME", v1);
        myEditor.putString("Gen", v2);
        myEditor.putString("univ", v3);
        myEditor.putString("bran", v4);
        myEditor.putString("pass", v5);
        myEditor.commit();
        Intent redirect = new Intent(this,SucessActivity.class).putExtra("username",v1);
        /*//redirect = new Intent(this,SucessActivity.class).putExtra("username",v1);
        redirect = new Intent(this,SucessActivity.class).putExtra("gen",v2);
        redirect = new Intent(this,SucessActivity.class).putExtra("uni",v3);
        redirect = new Intent(this,SucessActivity.class).putExtra("bran",v4);
        redirect = new Intent(this,SucessActivity.class).putExtra("pass",v5);*/
        startActivity(redirect);
    }
}


